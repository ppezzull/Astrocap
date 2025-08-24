import { HeaderLogo } from "./Logo"
import { HeaderNav } from "./Nav"
import { HeaderRight } from "./right/HeaderRight"
import type { Dictionary } from "@/lib/i18n"

export { HeaderLogo, HeaderNav }

export default function Header({ dict, locale }: { dict: Dictionary; locale: string }) {
  const labels = {
    caps: dict.nav.caps ?? "CAPS",
    process: dict.nav.process ?? "PROCESS",
    contact: dict.nav.contact ?? "CONTACT",
  }

  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-blue-500/20 font-jakarta">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between overflow-x-hidden">
        <HeaderLogo locale={locale} />
        <nav className="hidden md:flex items-center space-x-6">
          <HeaderNav locale={locale} labels={labels} />
        </nav>
        <HeaderRight ctaLabel={dict.cta.headerButton} locale={locale} />
      </div>
    </header>
  )
}