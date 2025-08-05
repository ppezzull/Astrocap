import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import PreviewCapsSection from "@/components/home/PreviewCapsSection"
import MiniProcessSection from "@/components/home/MiniProcessSection"
import CtaSection from "@/components/home/CtaSection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <PreviewCapsSection />
      <MiniProcessSection />
      <CtaSection />
    </div>
  )
}
