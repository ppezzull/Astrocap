import Link from "next/link"
import { Instagram, Mail } from "lucide-react"
import { SiTiktok } from "react-icons/si"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(15, 58, 175)" }} className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-center md:text-left font-bold font-deardorf text-2xl">Crafted with fire and style — AstroCap © 2025</p>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
              HOME
            </Link>
            <Link href="/caps" className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
              CAPS
            </Link>
            <Link href="/process" className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
              PROCESS
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
              CONTACT
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://www.instagram.com/astrocapmerch" 
              className="hover:text-blue-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <SiTiktok className="h-6 w-6" />
            </a>
            <a href="mailto:AstroCapMerch@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
