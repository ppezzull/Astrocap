"use client"

import type React from "react"

import { sendEmail } from "@/lib/_actions/send-email"
import { useActionState } from "react"
import type { ContactState } from "@/lib/_actions/send-email"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"

const initialState: ContactState | undefined = undefined

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-title">CONTATTI</h1>
          <p className="text-3xl text-white font-semibold font-deardorf">INIZIA IL TUO PROGETTO PERSONALIZZATO</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </div>
  )
}
