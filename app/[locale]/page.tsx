import HeroSection from "@/components/home/HeroSection"
import AboutSection from "@/components/home/AboutSection"
import PreviewCapsSection from "@/components/home/PreviewCapsSection"
import MiniProcessSection from "@/components/home/MiniProcessSection"
import CtaSection from "@/components/home/CtaSection"
import EditorDemoSection from "@/components/home/EditorDemoSection"
import { getDictionary } from "@/lib/i18n"

export default async function HomePage(props: { params: { locale: string } }) {
  // Next.js 15 requires awaiting props.params before accessing properties
  const params = await props.params
  const { locale } = params
  const dict = await getDictionary(locale as any)
  return (
    <div className="min-h-screen">
      <HeroSection title={dict.hero.title} subtitle={dict.hero.subtitle} cta={dict.hero.cta} />
      <AboutSection heading={dict.home.about.heading} p1={dict.home.about.p1} p2={dict.home.about.p2} />
      <PreviewCapsSection heading={dict.home.preview.heading} />
  <EditorDemoSection heading={dict.home.editorDemo?.heading} subtitle={dict.home.editorDemo?.subtitle} cta={dict.home.editorDemo?.cta} locale={locale} />
      <MiniProcessSection heading={dict.home.process.heading} steps={dict.home.process.steps} cta={dict.home.process.cta} />
      <CtaSection heading={dict.home.callout.heading} subtitle={dict.home.callout.subtitle} button={dict.home.callout.button} />
    </div>
  )
}

