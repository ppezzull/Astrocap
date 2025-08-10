"use client";

import React, { useActionState } from "react";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { ContactState } from "@/lib/_actions/send-email";
import { sendEmail } from "@/lib/_actions/send-email";
import { useState } from "react";
import ContactImagesInput from "./ContactImagesInput";
import { usePathname } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import { locales } from "@/lib/i18n/locales";

const initialState: ContactState | undefined = undefined;

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);
  const pathname = usePathname();
  const seg = (pathname?.split("/")[1] || "it");
  const locale = locales.includes(seg as any) ? (seg as any) : "it";
  const [dict, setDict] = React.useState<any>(null);
  React.useEffect(() => {
    getDictionary(locale).then(setDict);
  }, [locale]);

  // Show toast on status change
  React.useEffect(() => {
    if (state) {
      console.log("TOAST", state);
    }
    if (state?.status === "success") {
      toast({
        title: dict?.contactPage.form.toastSuccessTitle ?? "Messaggio inviato con successo!",
        description: dict?.contactPage.form.toastSuccessDesc ?? "Grazie per averci contattato. Ti risponderemo al più presto.",
        variant: "default"
      });
    } else if (state?.status === "error") {
      toast({
        title: dict?.contactPage.form.toastErrorTitle ?? "Errore nell'invio",
        description: dict?.contactPage.form.toastErrorDesc ?? "Errore nell'invio. Riprova o scrivimi direttamente!",
        variant: "destructive"
      });
    }
  }, [state, dict]);

  // State for image previews and files
  const [filePreviews, setFilePreviews] = useState<string[]>([]);
  const [files, setFiles] = useState<(File | null)[]>([]);
  const maxImages = 5;

  // Handle file input change
  const handleFileChange = (file: File | null, idx: number) => {
    if (!file) {
      // Remove file and preview at idx
      setFiles((prev) => prev.filter((_, i) => i !== idx));
      setFilePreviews((prev) => prev.filter((_, i) => i !== idx));
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreviews((prev) => {
        const updated = [...prev];
        updated[idx] = reader.result as string;
        return updated;
      });
    };
    reader.readAsDataURL(file);
    setFiles((prev) => {
      const updated = [...prev];
      updated[idx] = file;
      // Add a new empty slot if at the end and under maxImages
      if (updated.length < maxImages && idx === updated.length - 1) {
        updated.push(null);
      }
      return updated;
    });
  };

  // Remove an image
  const handleRemove = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setFilePreviews((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <Card className="bg-gray-900 border-blue-500/30">
      <CardHeader>
        <CardTitle className="text-3xl font-black text-white font-jakarta">
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-4xl text-transparent">
            INVIA LA TUA RICHIESTA
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form
          action={async (formData) => {
            // Calculate total file size
            const fileInputs = files.filter(Boolean) as File[];
            const totalSize = fileInputs.reduce((sum, f) => sum + f.size, 0);
            if (totalSize > 10 * 1024 * 1024) {
              toast({
                title: dict?.contactPage.form.toastTooBigTitle ?? "Allegati troppo grandi",
                description: dict?.contactPage.form.toastTooBigDesc ?? "Il totale degli allegati supera i 10MB. Riduci la dimensione o il numero dei file allegati e riprova.",
                variant: "destructive"
              });
              return;
            }
            // If under limit, submit as usual
            // @ts-ignore
            formAction(formData);
          }}
          className="space-y-6"
        >
          <div>
            <Label
              htmlFor="nome"
              className="text-white font-semibold font-deardorf text-3xl"
            >
              {dict?.contactPage.form.nameLabel ?? "Nome *"}
            </Label>
            <Input
              id="nome"
              name="nome"
              required
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500 placeholder:text-xl placeholder:font-bold"
              style={{ fontSize: "1.25rem", padding: "0.75rem" }}
              placeholder={dict?.contactPage.form.namePlaceholder ?? "Il tuo nome"}
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="text-white font-semibold font-deardorf text-3xl"
            >
              {dict?.contactPage.form.emailLabel ?? "Email *"}
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500 placeholder:text-xl placeholder:font-bold"
              style={{ fontSize: "1.25rem", padding: "0.75rem" }}
              placeholder={dict?.contactPage.form.emailPlaceholder ?? "la tua mail"}
            />
          </div>

          <div>
            <Label
              htmlFor="messaggio"
              className="text-white font-semibold font-deardorf text-3xl"
            >
              {dict?.contactPage.form.messageLabel ?? "Messaggio *"}
            </Label>
            <Textarea
              id="messaggio"
              name="messaggio"
              required
              rows={6}
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500 placeholder:text-xl placeholder:font-bold"
              style={{ fontSize: "1.25rem", padding: "0.75rem" }}
              placeholder={dict?.contactPage.form.messagePlaceholder ?? "Descrivi la tua idea per il cappello personalizzato..."}
            />
          </div>

          <ContactImagesInput
            filePreviews={filePreviews}
            onFileChange={handleFileChange}
            onRemove={handleRemove}
            maxImages={maxImages}
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 text-2xl tracking-wide font-deardorf"
          >
            {dict?.contactPage.form.submit ?? "INVIA RICHIESTA"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
