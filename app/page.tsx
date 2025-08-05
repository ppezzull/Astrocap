"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Flame, Crown } from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url(/images/bandana-bg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Animated overlay */}
        <div
          className={`absolute inset-0 bg-black/60 transition-all duration-2000`}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="relative">
            {/* Flame background effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-blue-500/20 to-transparent rounded-3xl blur-3xl" />

            <div className="relative bg-black/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/30">
              <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-wider">
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                  CAPPELLI PERSONALIZZATI
                </span>
                <br />
                <span className="text-white">CON BRILLANTINI</span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-blue-200 font-semibold">
                Ogni cappello racconta la tua storia, con fiamme e stile.
              </p>

              <Link href="/caps">
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-xl tracking-wide shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  SCOPRI I CAPPELLI
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
 
      {/* Chi Sono Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                  CHI SONO
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Sono un artista specializzato nella personalizzazione di cappelli con cristalli e brillantini. Ogni
                pezzo è unico, creato a mano con passione e dedizione per lo stile streetwear.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                La mia missione è trasformare cappelli ordinari in opere d'arte che riflettono la personalità e lo stile
                di chi li indossa. Fiamme, cristalli e design audaci sono la mia firma.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-500/20 rounded-2xl blur-2xl" />
              <Image
                src="/images/caps/cap8.png"
                alt="Custom cap in hand"
                width={500}
                height={600}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Preview Caps Section */}
      <section style={{ backgroundColor: "rgb(15, 58, 175)" }} className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              ANTEPRIMA CAPPELLI
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { src: "/images/caps/cap1.png", name: "Fiamma Nera", style: "NY Flames" },
              { src: "/images/caps/cap2.png", name: "Crystal Blue", style: "Texas Rangers" },
              { src: "/images/caps/cap4.png", name: "Ocean Storm", style: "White Sox" },
            ].map((cap, index) => (
              <Card
                key={index}
                className="bg-black/50 border-blue-500/30 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg" />
                    <Image
                      src={cap.src || "/placeholder.svg"}
                      alt={cap.name}
                      width={300}
                      height={300}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{cap.name}</h3>
                  <p className="text-blue-300">{cap.style}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Process Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
              IL PROCESSO
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Palette, title: "IMMAGINA", desc: "Condividi la tua visione" },
              { icon: Flame, title: "DISEGNA", desc: "Creo il design perfetto" },
              { icon: Crown, title: "CREA", desc: "Realizzo il tuo cappello" },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-500 rounded-full blur-xl opacity-50" />
                  <div className="relative bg-gradient-to-r from-blue-500 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/process">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-lg">
                SCOPRI IL PROCESSO COMPLETO
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">HAI UN'IDEA?</h2>
          <p className="text-2xl text-white mb-8 font-semibold">Rendila realtà.</p>
          <Link href="/contact">
            <Button className="bg-black hover:bg-gray-900 text-white font-bold px-12 py-6 text-xl tracking-wide shadow-2xl hover:shadow-black/50 transition-all duration-300 transform hover:scale-105">
              DRIP NOW!
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
