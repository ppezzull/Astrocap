import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Palette, Hammer, Sparkles } from "lucide-react"

const steps = [
  {
    icon: MessageCircle,
    title: "SCRIVIMI LA TUA IDEA",
    description:
      "Condividi la tua visione, i colori preferiti, lo stile che desideri. Ogni dettaglio conta per creare il cappello perfetto.",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Palette,
    title: "CREO UN BOZZETTO UNICO",
    description:
      "Trasformo la tua idea in un design dettagliato, scegliendo cristalli, posizioni e effetti per massimizzare l'impatto visivo.",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Hammer,
    title: "PERSONALIZZO IL CAPPELLO",
    description:
      "Con precisione artigianale, applico ogni cristallo e dettaglio a mano, creando un pezzo unico che rispecchia la tua personalità.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Sparkles,
    title: "ENJOY YOUR DRIP",
    description:
      "Il tuo cappello personalizzato è pronto! Un'opera d'arte indossabile che cattura l'attenzione e racconta la tua storia.",
    color: "from-green-500 to-teal-600",
  },
]

export default function ProcessSteps() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12`}
            >
              {/* Step Number and Icon */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-2xl opacity-50`}
                  />
                  <div
                    className={`relative bg-gradient-to-r ${step.color} w-32 h-32 rounded-full flex items-center justify-center`}
                  >
                    <step.icon className="h-16 w-16 text-white" />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-white text-black w-12 h-12 rounded-full flex items-center justify-center font-black text-xl">
                    {index + 1}
                  </div>
                </div>
              </div>

              {/* Step Content */}
              <div className="flex-1">
                <Card className="bg-gray-900 border-blue-500/30 hover:border-blue-500 transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-5xl font-black text-white mb-4 font-deardorf">{step.title}</h3>
                    <p className="text-3xl text-gray-300 leading-relaxed font-deardorf">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
