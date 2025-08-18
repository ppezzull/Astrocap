import type React from "react"
import "@/styles/globals.css"
import { locales } from "@/lib/i18n/locales"
import Header from "@/components/header"
import { getDictionary } from "@/lib/i18n"

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // Next.js requires awaiting params before accessing properties
  const paramsObj = await params
  const { locale } = paramsObj
  const dict = await getDictionary(locale as any)

  return (
    <>
      <Header dict={dict} locale={locale} />
      {children}
    </>
  )
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

