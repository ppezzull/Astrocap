import CapsGallery from "@/components/caps/CapsGallery"
import CapsCtaSection from "@/components/caps/CapsCtaSection"
import { getDictionary } from "@/lib/i18n"

export default async function CapsPage(props: { params: { locale: string } }) {
  const params = await props.params
  const { locale } = params
  const dict = await getDictionary(locale as any)
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-black text-white mb-6 tracking-normal md:tracking-wider leading-tight break-words font-jakarta">
            {dict.pages.caps.title}
          </h1>
        </div>
      </section>
      <CapsGallery />
      <CapsCtaSection heading={dict.capsPage.cta.heading} subtitle={dict.capsPage.cta.subtitle} button={dict.capsPage.cta.button} />
    </div>
  )
}

