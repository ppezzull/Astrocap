import ProcessIntro from "@/components/process/ProcessIntro"
import ProcessSteps from "@/components/process/ProcessSteps"
import ProcessCtaSection from "@/components/process/ProcessCtaSection"
import { getDictionary } from "@/lib/i18n"

export default async function ProcessPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params
  const dict = await getDictionary(locale as any)
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-jakarta">{dict.pages.process.title}</h1>
          <p className="text-3xl text-white font-semibold font-deardorf">{dict.pages.process.subtitle}</p>
        </div>
      </section>
      <ProcessIntro title={dict.processPage.intro.title} paragraph={dict.processPage.intro.paragraph} />
      <ProcessSteps stepsText={dict.processPage.steps} />
      <ProcessCtaSection heading={dict.processPage.cta.heading} button={dict.processPage.cta.button} />
    </div>
  )
}

