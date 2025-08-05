import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import type { ContactState } from "@/lib/_actions/send-email";
import { sendEmail } from "@/lib/_actions/send-email";
import { useState } from "react";
import ContactImagesInput from "./ContactImagesInput";

const initialState: ContactState | undefined = undefined;

export default function ContactForm() {
  const [state, formAction] = useActionState(sendEmail, initialState);

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
        <form action={formAction} className="space-y-6">
          <div>
            <Label
              htmlFor="nome"
              className="text-white font-semibold font-deardorf text-3xl"
            >
              Nome *
            </Label>
            <Input
              id="nome"
              name="nome"
              required
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500 placeholder:text-xl placeholder:font-bold"
              style={{ fontSize: "1.25rem", padding: "0.75rem" }}
              placeholder="Il tuo nome"
            />
          </div>

          <div>
            <Label
              htmlFor="email"
              className="text-white font-semibold font-deardorf text-3xl"
            >
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500 placeholder:text-xl placeholder:font-bold"
              style={{ fontSize: "1.25rem", padding: "0.75rem" }}
              placeholder="la tua mail"
            />
          </div>

          <div>
            <Label
              htmlFor="messaggio"
              className="text-white font-semibold font-deardorf text-3xl"
            >
              Messaggio *
            </Label>
            <Textarea
              id="messaggio"
              name="messaggio"
              required
              rows={6}
              className="bg-black border-blue-500/50 text-white text-2xl focus:border-blue-500 placeholder:text-xl placeholder:font-bold"
              style={{ fontSize: "1.25rem", padding: "0.75rem" }}
              placeholder="Descrivi la tua idea per il cappello personalizzato..."
            />
          </div>

          <ContactImagesInput
            filePreviews={filePreviews}
            onFileChange={handleFileChange}
            onRemove={handleRemove}
            maxImages={maxImages}
          />

          {state?.status === "success" && (
            <p className="text-green-500">Messaggio inviato con successo!</p>
          )}
          {state?.status === "error" && (
            <p className="text-red-500">
              Errore nell'invio. Riprova o scrivimi direttamente!
            </p>
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
  );
}
