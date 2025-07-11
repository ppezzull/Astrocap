import Link from "next/link"
import { Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(15, 58, 175)" }} className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-center md:text-left font-bold">Crafted with fire and style — AstroCap © 2025</p>

          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <Link href="/" className="hover:text-orange-400 transition-colors">
              HOME
            </Link>
            <Link href="/caps" className="hover:text-orange-400 transition-colors">
              CAPS
            </Link>
            <Link href="/process" className="hover:text-orange-400 transition-colors">
              PROCESS
            </Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.87 3.87 3.81 3.81 0 01-3.81-3.81 3.81 3.81 0 013.81-3.81c.21 0 .41.02.6.07V1.96c-.2-.02-.4-.02-.6-.02A5.87 5.87 0 004 7.81a5.87 5.87 0 005.87 5.87 5.87 5.87 0 005.87-5.87V9.47a6.93 6.93 0 004.09 1.33v-2.08a4.86 4.86 0 01-4.24-2.03z" />
              </svg>
            </a>
            <a href="#" className="hover:text-orange-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
