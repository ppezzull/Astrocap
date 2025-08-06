"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Define the schema for the contact form using Zod
const ContactSchema = z.object({
  nome: z.string().min(1, "Il nome è obbligatorio"),
  email: z.string().email("Email non valida"),
  messaggio: z.string().min(1, "Il messaggio è obbligatorio"),
  // Attachments is optional array
  attachments: z
    .array(
      z.object({
        name: z.string(),
        type: z.string(),
        size: z.number(),
        buffer: z.instanceof(Buffer),
      })
    )
    .optional(),
})

export type ContactState =
  | {
      status: "success"
    }
  | {
      status: "error"
      errors: Record<string, string[]>
    }

/**
 * Server Action – sendEmail
 * This function validates the submitted FormData using Zod and, if valid,
 * sends an email via Nodemailer using the SMTP credentials provided in
 * environment variables. It optionally attaches an uploaded image.
 */
export async function sendEmail(_prevState: ContactState | undefined, formData: FormData): Promise<ContactState> {
  // Convert FormData to a plain object first
  const raw = Object.fromEntries(formData.entries()) as Record<string, any>

  // Extract all file attachments
  const files = formData.getAll("files") as File[]
  const attachments: { name: string; type: string; size: number; buffer: Buffer }[] = []

  for (const file of files) {
    if (file && file.size > 0) {
      const arrayBuffer = await file.arrayBuffer()
      attachments.push({
        name: file.name,
        type: file.type,
        size: file.size,
        buffer: Buffer.from(arrayBuffer),
      })
    }
  }

  // Check total attachments size (10MB = 10 * 1024 * 1024 bytes)
  const totalAttachmentSize = attachments.reduce((sum, att) => sum + att.size, 0);
  if (totalAttachmentSize > 10 * 1024 * 1024) {
    return {
      status: "error",
      errors: {
        general: [
          "Il totale degli allegati supera i 10MB. Riduci la dimensione o il numero dei file allegati e riprova."
        ],
      },
    };
  }

  // Build data object for validation
  const dataForValidation = {
    nome: raw.nome,
    email: raw.email,
    messaggio: raw.messaggio,
    attachments,
  }

  const parseResult = ContactSchema.safeParse(dataForValidation)

  if (!parseResult.success) {
    return {
      status: "error",
      errors: parseResult.error.flatten().fieldErrors,
    }
  }

  const { nome, email, messaggio } = parseResult.data

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  // Prepare the email payload
  const mailOptions: nodemailer.SendMailOptions = {
    from: `"${nome}" <${email}>`,
    to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
    subject: "Nuova richiesta di contatto dal sito Astrocap",
    text: messaggio,
    attachments: attachments.map(att => ({
      filename: att.name,
      content: att.buffer,
      contentType: att.type,
    }))
  }

  // Send the email
  try {
    await transporter.sendMail(mailOptions)
    return { status: "success" }
  } catch (err) {
    console.error("Errore invio email:", err)
    return {
      status: "error",
      errors: {
        general: ["Si è verificato un errore durante l'invio dell'email. Riprova più tardi."] as string[],
      },
    }
  }
}
