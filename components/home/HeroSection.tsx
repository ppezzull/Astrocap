import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection({ title, subtitle, cta }: { title?: string; subtitle?: string; cta?: string }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/wallpaper.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={`absolute inset-0 bg-black/60 transition-all duration-2000`} />

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto transform -translate-y-16 sm:-translate-y-20 md:translate-y-0">
        <div className="relative">
          <div className="relative bg-black/50 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-12 border border-blue-500/30">
            <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-6 font-jakarta">
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent border-white">
                {title ?? "CAPPELLI PERSONALIZZATI CON BRILLANTINI"}
              </span>
              <br />
            </h1>

            <p className="text-xl sm:text-3xl md:text-4xl mb-8 text-blue-200 font-semibold font-jakarta">
              {subtitle ?? "Ogni cappello racconta la tua storia, con fiamme e stile."}
            </p>

            <Link href="/caps">
              <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 md:px-10 py-4 text-xl sm:text-2xl md:text-3xl tracking-wide shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-jakarta">
                {cta ?? "SCOPRI I CAPPELLI"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
