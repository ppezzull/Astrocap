import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CapsCtaSection({ heading, subtitle, button }: { heading?: string; subtitle?: string; button?: string }) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 font-jakarta">{heading ?? "REALIZZA LA TUA IDEA"}</h2>
        <p className="text-4xl text-white mb-8 font-semibold font-deardorf">{subtitle ?? "Ogni cappello può diventare un'opera d'arte personalizzata"}</p>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-6 text-3xl tracking-wide shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-deardorf">{button ?? "CONTATTAMI"}</Button>
        </Link>
      </div>
    </section>
  )
}
