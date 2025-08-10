import { FooterCopyright } from "./Copyright"
import { FooterNav } from "./Nav"
import { FooterSocials } from "./Socials"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(15, 58, 175)" }} className="text-white py-8">
      <div className="container mx-auto px-4 overflow-x-hidden">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <FooterCopyright />
          <FooterNav />
          <FooterSocials />
        </div>
      </div>
    </footer>
  )
} 