export default function ProcessIntro({ title, paragraph }: { title?: string; paragraph?: string }) {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent font-jakarta">{title ?? "Il Mio Metodo di Creazione"}</span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-jakarta">{paragraph ?? "Ogni cappello personalizzato nasce da un processo creativo unico che combina la tua visione con la mia esperienza artigianale. Dalla prima idea al prodotto finito, ogni fase è curata nei minimi dettagli per garantire un risultato eccezionale."}</p>
      </div>
    </section>
  )
}
