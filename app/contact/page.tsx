"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Instagram, Mail, Upload } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    messaggio: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider">CONTATTI</h1>
          <p className="text-xl text-white font-semibold">INIZIA IL TUO PROGETTO PERSONALIZZATO</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gray-900 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-white">
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                    INVIA LA TUA RICHIESTA
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="text-white font-semibold">
                      Nome *
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      className="bg-black border-blue-500/50 text-white focus:border-blue-500"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white font-semibold">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-black border-blue-500/50 text-white focus:border-blue-500"
                      placeholder="la.tua.email@esempio.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="messaggio" className="text-white font-semibold">
                      Messaggio *
                    </Label>
                    <Textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-black border-blue-500/50 text-white focus:border-blue-500"
                      placeholder="Descrivi la tua idea per il cappello personalizzato..."
                    />
                  </div>

                  <div>
                    <Label className="text-white font-semibold">File Upload (Opzionale)</Label>
                    <div className="mt-2 border-2 border-dashed border-blue-500/50 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                      <Upload className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                      <p className="text-gray-300">Carica immagini di riferimento o ispirazioni</p>
                      <p className="text-sm text-gray-500 mt-2">PNG, JPG fino a 10MB</p>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 text-lg tracking-wide"
                  >
                    INVIA RICHIESTA
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Direct Email */}
              <Card className="bg-gray-900 border-blue-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                      CONTATTO DIRETTO
                    </span>
                  </h3>
                  <div className="flex items-center space-x-4">
                    <Mail className="h-8 w-8 text-blue-400" />
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <a href="mailto:info@astrocap.com" className="text-blue-400 hover:text-blue-300">
                        info@astrocap.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-gray-900 border-blue-500/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                      SEGUIMI SUI SOCIAL
                    </span>
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="#"
                      className="flex items-center space-x-4 text-white hover:text-blue-400 transition-colors"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full">
                        <Instagram className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-semibold">Instagram</p>
                        <p className="text-gray-400">@astrocap_official</p>
                      </div>
                    </a>

                    <a
                      href="#"
                      className="flex items-center space-x-4 text-white hover:text-blue-400 transition-colors"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 rounded-full">
                        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.87 3.87 3.81 3.81 0 01-3.81-3.81 3.81 3.81 0 013.81-3.81c.21 0 .41.02.6.07V1.96c-.2-.02-.4-.02-.6-.02A5.87 5.87 0 004 7.81a5.87 5.87 0 005.87 5.87 5.87 5.87 0 005.87-5.87V9.47a6.93 6.93 0 004.09 1.33v-2.08a4.86 4.86 0 01-4.24-2.03z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold">TikTok</p>
                        <p className="text-gray-400">@astrocap_drip</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-gradient-to-r from-blue-500/20 to-blue-500/20 border-blue-500/50">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">TEMPO DI RISPOSTA</h3>
                  <p className="text-blue-200">
                    Rispondo entro 24 ore per iniziare subito il tuo progetto personalizzato!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
