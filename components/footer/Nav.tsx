"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n/locales"

export function FooterNav({ labels }: { labels?: { home: string; caps: string; process: string; contact: string; editor?: string } }) {
  const pathname = usePathname()
  const seg = (pathname?.split("/")[1] || "it")
  const locale = locales.includes(seg as any) ? seg : "it"

  return (
    <nav className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 max-w-full px-2">
      <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors font-jakarta text-sm sm:text-base md:text-lg whitespace-nowrap">
        {labels?.home ?? "HOME"}
      </Link>
      <Link href={`/${locale}/caps`} className="hover:text-blue-400 transition-colors font-jakarta text-sm sm:text-base md:text-lg whitespace-nowrap">
        {labels?.caps ?? "CAPS"}
      </Link>
      <Link href={`/${locale}/editor`} className="hover:text-blue-400 transition-colors font-jakarta text-sm sm:text-base md:text-lg whitespace-nowrap">
        {labels?.editor ?? "EDITOR"}
      </Link>
      <Link href={`/${locale}/process`} className="hover:text-blue-400 transition-colors font-jakarta text-sm sm:text-base md:text-lg whitespace-nowrap">
        {labels?.process ?? "PROCESS"}
      </Link>
      <Link href={`/${locale}/contact`} className="hover:text-blue-400 transition-colors font-jakarta text-sm sm:text-base md:text-lg whitespace-nowrap">
        {labels?.contact ?? "CONTACT"}
      </Link>
    </nav>
  )
}