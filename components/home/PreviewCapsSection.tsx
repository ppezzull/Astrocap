import { CapCard } from "@/components/CapCard"

export default function PreviewCapsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center text-white mb-12">
          <span className="bg-gradient-to-r font-jakarta from-white to-white bg-clip-text text-transparent">
            ANTEPRIMA CAPPELLI
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { src: "/images/caps/cap1.png", name: "Fiamma Nera", style: "NY Flames" },
            { src: "/images/caps/cap2.png", name: "Crystal Blue", style: "Texas Rangers" },
            { src: "/images/caps/cap4.png", name: "Ocean Storm", style: "White Sox" },
          ].map((cap, index) => (
            <CapCard key={index} src={cap.src} name={cap.name} style={cap.style} />
          ))}
        </div>
      </div>
    </section>
  )
}
