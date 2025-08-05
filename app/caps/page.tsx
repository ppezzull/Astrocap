import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const caps = [
  { src: "/images/caps/cap1.png", name: "Fiamma Nera", style: "NY Flames Edition" },
  { src: "/images/caps/cap2.png", name: "Crystal Blue", style: "Texas Rangers Custom" },
  { src: "/images/caps/cap3.png", name: "Brand Power", style: "Crystal Brand Logo" },
  { src: "/images/caps/cap4.png", name: "Ocean Storm", style: "White Sox Distressed" },
  { src: "/images/caps/cap5.png", name: "Liberty Shine", style: "NY Statue Crystal" },
  { src: "/images/caps/cap6.png", name: "Diamond NY", style: "Classic Crystal NY" },
  { src: "/images/caps/cap7.png", name: "Lakers Luxury", style: "Purple & Gold Set" },
  { src: "/images/caps/cap8.png", name: "LA Dreams", style: "Dodgers Palm Style" },
]

export default function CapsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider">I MIEI CAPPELLI</h1>
          <p className="text-xl text-white font-semibold">PERSONALIZZATI</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caps.map((cap, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-blue-500/30 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Image
                      src={cap.src || "/placeholder.svg"}
                      alt={cap.name}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{cap.name}</h3>
                    <p className="text-blue-400 font-semibold">{cap.style}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Prompt */}
      <section style={{ backgroundColor: "rgb(15, 58, 175)" }} className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">HAI UN'IDEA UNICA?</h2>
          <p className="text-xl text-white mb-8 font-semibold">
            Ogni cappello può diventare un'opera d'arte personalizzata
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-6 text-xl tracking-wide shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              CONTATTAMI
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
