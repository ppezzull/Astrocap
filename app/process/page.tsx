import ProcessIntro from "@/components/process/ProcessIntro"
import ProcessSteps from "@/components/process/ProcessSteps"
import ProcessCtaSection from "@/components/process/ProcessCtaSection"

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-jakarta">COME FUNZIONA</h1>
          <p className="text-3xl text-white font-semibold font-deardorf">DAL BOZZETTO ALLA FIAMMA</p>
        </div>
      </section>
      <ProcessIntro />
      <ProcessSteps />
      <ProcessCtaSection />
    </div>
  )
}
