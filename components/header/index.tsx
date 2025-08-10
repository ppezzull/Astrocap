import { HeaderLogo } from "./Logo"
import { HeaderNav } from "./Nav"
import { LanguageSelector } from "./LanguageSelector"
import { HeaderCtaButton } from "./CtaButton"
import { HeaderRight } from "./right/HeaderRight"

export { HeaderLogo, HeaderNav, LanguageSelector, HeaderCtaButton }

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black/50 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between overflow-x-hidden">
        <HeaderLogo />
        <nav className="hidden md:flex items-center space-x-6">
          <HeaderNav />
        </nav>
        <HeaderRight />
      </div>
    </header>
  )
} 