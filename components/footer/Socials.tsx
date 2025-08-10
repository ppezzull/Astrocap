import { Instagram, Mail } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export function FooterSocials() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/astrocapmerch"
        className="hover:text-blue-400 transition-colors"
      >
        <Instagram className="h-6 w-6" />
      </a>
      <a className="hover:text-blue-400 transition-colors">
        <SiTiktok className="h-6 w-6" />
      </a>
      <a href="mailto:AstroCapMerch@gmail.com" className="hover:text-blue-400 transition-colors">
        <Mail className="h-6 w-6" />
      </a>
    </div>
  )
} 