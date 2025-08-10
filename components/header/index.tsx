"use client"

import { HeaderLogo } from "./Logo"
import { HeaderNav } from "./Nav"
import { LanguageSelector } from "./LanguageSelector"
import { HeaderCtaButton } from "./CtaButton"
import { HeaderRight } from "./right/HeaderRight"
import type { Dictionary } from "@/lib/i18n"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n/locales"
import { useEffect, useState } from "react"
import { getDictionary } from "@/lib/i18n"

export { HeaderLogo, HeaderNav, LanguageSelector, HeaderCtaButton }

export default function Header({ dict: dictProp, locale: localeProp }: { dict?: Dictionary; locale?: string }) {
  const pathname = usePathname()
  const seg = (pathname?.split("/")[1] || "it")
  const locale = (localeProp as any) || (locales.includes(seg as any) ? seg : "it")
  const [dict, setDict] = useState<Dictionary | undefined>(dictProp)

  useEffect(() => {
    if (!dictProp) {
      getDictionary(locale as any).then(setDict)
    }
  }, [locale, dictProp])

  const labels = {
    caps: dict?.nav.caps ?? "CAPS",
    process: dict?.nav.process ?? "PROCESS",
    contact: dict?.nav.contact ?? "CONTACT",
  }
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between overflow-x-hidden">
        <HeaderLogo locale={locale} />
        <nav className="hidden md:flex items-center space-x-6">
          <HeaderNav locale={locale} labels={labels} />
        </nav>
        <HeaderRight ctaLabel={dict?.cta.headerButton} />
      </div>
    </header>
  )
} 