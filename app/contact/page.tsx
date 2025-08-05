"use client"

import type React from "react"

import { sendEmail } from "@/app/contact/_actions/send-email"
import { useActionState } from "react"
import type { ContactState } from "@/app/contact/_actions/send-email"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Instagram, Mail } from "lucide-react"
import { SiTiktok } from "react-icons/si"

const initialState: ContactState | undefined = undefined

export default function ContactPage() {
  const [state, formAction] = useActionState(sendEmail, initialState);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-title">CONTATTI</h1>
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
                <form action={formAction} className="space-y-6">
                  <div>
                    <Label htmlFor="nome" className="text-white font-semibold">
                      Nome *
                    </Label>
                    <Input
                      id="nome"
                      name="nome"
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
                      required
                      rows={6}
                      className="bg-black border-blue-500/50 text-white focus:border-blue-500"
                      placeholder="Descrivi la tua idea per il cappello personalizzato..."
                    />
                  </div>

                  <div>
                    <Label htmlFor="files" className="text-white font-semibold">File Upload (Opzionale)</Label>
                    <Input id="files" name="files" type="file" accept="image/png,image/jpeg" multiple className="bg-black border-blue-500/50 text-white focus:border-blue-500" />
                  </div>

                  {state?.status === "success" && <p className="text-green-500">Messaggio inviato con successo!</p>}
                  {state?.status === "error" && (
                    <p className="text-red-500">{state.errors.general?.[0] ?? "Errore invio messaggio"}</p>
                  )}
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
                        <SiTiktok className="h-6 w-6" />
                          
                        
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
              <Card className="bg-gray-900 border-blue-500/50">
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
