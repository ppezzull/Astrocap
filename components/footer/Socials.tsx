import { SiInstagram } from "react-icons/si"
import { RiTiktokLine } from "react-icons/ri";
import { Mail } from "lucide-react"


export function FooterSocials() {
  return (
    <div className="flex space-x-4">
      <a
        href="https://www.instagram.com/astrocapmerch"
        className="hover:text-blue-400 transition-colors"
      >
        <SiInstagram className="h-6 w-6" />
      </a>
      <a className="hover:text-blue-400 transition-colors">
        <RiTiktokLine className="h-7 w-7" />
      </a>
      <a href="mailto:AstroCapMerch@gmail.com" className="hover:text-blue-400 transition-colors">
        <Mail className="h-7 w-7" />
      </a>
    </div>
  )
} 