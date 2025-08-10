import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ProcessCtaSection({ heading, button }: { heading?: string; button?: string }) {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 font-jakarta">{heading ?? "INIZIA OGGI IL TUO CAPPELLO PERSONALIZZATO"}</h2>
        <Link href="/contact">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-12 py-6 text-3xl tracking-wide shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 font-deardorf">{button ?? "DRIP NOW!"}</Button>
        </Link>
      </div>
    </section>
  )
}
