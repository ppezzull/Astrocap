import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
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
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-wider font-title">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                CAPPELLI PERSONALIZZATI
              </span>
              <br />
              <span className="text-white">CON BRILLANTINI</span>
            </h1>

            <p className="text-3xl md:text-4xl mb-8 text-blue-200 font-semibold font-deardorf">
              Ogni cappello racconta la tua storia, con fiamme e stile.
            </p>

            <Link href="/caps">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-4 text-3xl tracking-wide shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-deardorf">
                SCOPRI I CAPPELLI
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
