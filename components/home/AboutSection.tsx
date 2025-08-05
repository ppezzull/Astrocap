import Image from "next/image"

export default function AboutSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r font-jakarta from-blue-400 to-blue-500 bg-clip-text text-transparent">
                CHI SONO
              </span>
            </h2>
            <p className="text-2xl text-gray-300 mb-6 leading-relaxed font-deardorf">
              Sono un artista specializzato nella personalizzazione di cappelli con cristalli e brillantini. Ogni
              pezzo è unico, creato a mano con passione e dedizione per lo stile streetwear.
            </p>
            <p className="text-2xl text-gray-300 leading-relaxed font-deardorf">
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
  )
}
