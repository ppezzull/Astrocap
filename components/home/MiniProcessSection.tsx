import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Palette, Flame, Crown } from "lucide-react"

export default function MiniProcessSection({ heading, steps, cta }: { heading?: string; steps?: { imagine: { title: string; desc: string }; design: { title: string; desc: string }; create: { title: string; desc: string } }; cta?: string }) {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">
          <span className="bg-gradient-to-r font-jakarta from-blue-400 to-blue-500 bg-clip-text text-transparent">{heading ?? "IL PROCESSO"}</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { icon: Palette, title: steps?.imagine.title ?? "IMMAGINA", desc: steps?.imagine.desc ?? "Condividi la tua visione" },
            { icon: Flame, title: steps?.design.title ?? "DISEGNA", desc: steps?.design.desc ?? "Creo il design perfetto" },
            { icon: Crown, title: steps?.create.title ?? "CREA", desc: steps?.create.desc ?? "Realizzo il tuo cappello" },
          ].map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full blur-xl opacity-50" />
                <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                  <step.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-4xl font-bold text-white mb-4 font-deardorf">{step.title}</h3>
              <p className="text-gray-300 font-deardorf text-3xl">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/process">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-2xl font-deardorf">{cta ?? "SCOPRI IL PROCESSO COMPLETO"}</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
