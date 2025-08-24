import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaSection({ heading, subtitle, button }: { heading?: string; subtitle?: string; button?: string }) {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 via-blue-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4 md:mb-6 font-jakarta">{heading ?? "PROPONI LA TUA IDEA"}</h2>
        <p className="text-xl md:text-3xl text-white mb-6 md:mb-8 font-semibold font-jakarta">{subtitle ?? "Rendila realtà."}</p>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 md:px-10 py-4 md:py-6 text-2xl md:text-3xl tracking-wide shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-jakarta">{button ?? "CONTATTAMI"}</Button>
        </Link>
      </div>
    </section>
  )
}
