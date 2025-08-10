import ContactForm from "@/components/contact/ContactForm"
import ContactInfo from "@/components/contact/ContactInfo"
import { getDictionary } from "@/lib/i18n"

export default async function ContactPage(props: { params: Promise<{ locale: string }> }) {
  const { locale } = await props.params
  const dict = await getDictionary(locale as any)
  return (
    <div className="min-h-screen bg-black">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-wider font-jakarta">{dict.pages.contact.title}</h1>
          <p className="text-3xl text-white font-semibold font-deardorf">{dict.pages.contact.subtitle}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo dict={dict} />
          </div>
        </div>
      </section>
    </div>
  )
}

