import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import type { ContactState } from "@/lib/_actions/send-email"
import { sendEmail } from "@/lib/_actions/send-email"

const initialState: ContactState | undefined = undefined

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState)

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
        <form action={formAction} className="space-y-6">
          <div>
            <Label htmlFor="nome" className="text-white font-semibold font-deardorf text-3xl">
              Nome *
            </Label>
            <Input
              id="nome"
              name="nome"
              required
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500"
              placeholder="Il tuo nome"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-white font-semibold font-deardorf text-3xl">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500"
              placeholder="la tua mail"
            />
          </div>

          <div>
            <Label htmlFor="messaggio" className="text-white font-semibold font-deardorf text-3xl">
              Messaggio *
            </Label>
            <Textarea
              id="messaggio"
              name="messaggio"
              required
              rows={6}
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500"
              placeholder="Descrivi la tua idea per il cappello personalizzato..."
            />
          </div>

          <div>
            <Label htmlFor="files" className="text-white font-semibold font-deardorf text-3xl">File Upload (Opzionale)</Label>
            <Input id="files" name="files" type="file" accept="image/png,image/jpeg" multiple className="bg-black border-blue-500/50 text-white text-xl text-center focus:border-blue-500" />
          </div>

          {state?.status === "success" && <p className="text-green-500">Messaggio inviato con successo!</p>}
          {state?.status === "error" && (
            <p className="text-red-500">Errore nell'invio. Riprova o scrivimi direttamente!</p>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 text-2xl tracking-wide font-deardorf"
          >
            INVIA RICHIESTA
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
