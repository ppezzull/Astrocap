import Link from "next/link"

export default function EditorDemoSection({ heading = "PROVA L'EDITOR 3D", subtitle = "Colora il cappello in tempo reale", cta = "APRI L'EDITOR", locale = "it" }: { heading?: string; subtitle?: string; cta?: string; locale?: string }) {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl border border-blue-500/30 bg-black/50 backdrop-blur-sm p-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 tracking-wider font-jakarta">{heading}</h2>
          <p className="text-white/70 mb-6 font-jakarta">{subtitle}</p>
          <Link
            href={`/${locale}/editor`}
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-3 rounded-lg transition-colors font-jakarta"
          >
            {cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
