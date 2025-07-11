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
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-sm border-b border-orange-500/20">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="AstroCap Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/caps"
            className="text-white hover:text-orange-400 transition-colors font-bold text-lg tracking-wide"
          >
            CAPS
          </Link>
          <Link
            href="/process"
            className="text-white hover:text-orange-400 transition-colors font-bold text-lg tracking-wide"
          >
            PROCESS
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-orange-400 transition-colors font-bold text-lg tracking-wide"
          >
            CONTACT
          </Link>
        </nav>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-20 bg-transparent border-orange-500/50 text-white">
              <Globe className="h-4 w-4" />
            </SelectTrigger>
            <SelectContent className="bg-black border-orange-500/50">
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
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold px-6 py-2 text-lg tracking-wide shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
              DRIP NOW!
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
