import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CapCard } from "@/components/CapCard"

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
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-title">I MIEI CAPPELLI PERSONALIZZATI</h1>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caps.map((cap, index) => (
              <CapCard key={index} src={cap.src} name={cap.name} style={cap.style} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Order Prompt */}
      <section style={{ backgroundColor: "rgb(15, 58, 175)" }} className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-jakarta">HAI UN'IDEA UNICA?</h2>
          <p className="text-4xl text-white mb-8 font-semibold font-deardorf">
            Ogni cappello può diventare un'opera d'arte personalizzata
          </p>
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-6 text-3xl tracking-wide shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-deardorf">
              CONTATTAMI
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
