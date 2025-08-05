"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Globe } from "lucide-react"

export default function Header() {
  const [language, setLanguage] = useState("it")

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-blue-500/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-transform duration-300 transform hover:scale-110">
          <Image src="/images/logo.png" alt="AstroCap Logo" width={240} height={240} className="h-16 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/caps"
            className="text-white hover:text-blue-400 transition-colors font-bold text-lg tracking-wide font-deardorf"
          >
            CAPS
          </Link>
          <Link
            href="/process"
            className="text-white hover:text-blue-400 transition-colors font-bold text-lg tracking-wide font-deardorf"
          >
            PROCESS
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-400 transition-colors font-bold text-lg tracking-wide font-deardorf"
          >
            CONTACT
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-20 bg-transparent border-blue-500/50 text-white">
              <Globe className="h-4 w-4" />
            </SelectTrigger>
            <SelectContent className="bg-black border-blue-500/50">
              <SelectItem value="it" className="text-white">
                🇮🇹
              </SelectItem>
              <SelectItem value="en" className="text-white">
                🇬🇧
              </SelectItem>
              <SelectItem value="ph" className="text-white">
                🇵🇭
              </SelectItem>
            </SelectContent>
          </Select>

          {/* CTA Button */}
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-6 py-2 text-lg tracking-wide shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-deardorf">
              DRIP NOW!
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
