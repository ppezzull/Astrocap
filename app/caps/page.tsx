import CapsGallery from "@/components/caps/CapsGallery"
import CapsCtaSection from "@/components/caps/CapsCtaSection"

export default function CapsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-title">I MIEI CAPPELLI PERSONALIZZATI</h1>
        </div>
      </section>
      <CapsGallery />
      <CapsCtaSection />
    </div>
  )
}
