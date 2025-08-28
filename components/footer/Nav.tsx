"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n/locales"

export function FooterNav({ labels }: { labels?: { home: string; caps: string; process: string; contact: string; editor?: string } }) {
  const pathname = usePathname()
  const seg = (pathname?.split("/")[1] || "it")
  const locale = locales.includes(seg as any) ? seg : "it"

  return (
    <nav className="flex flex-row space-x-3 sm:space-x-6 items-center max-w-xs mx-auto sm:max-w-none">
      <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors font-jakarta text-lg md:text-xl">
        {labels?.home ?? "HOME"}
      </Link>
      <Link href={`/${locale}/caps`} className="hover:text-blue-400 transition-colors font-jakarta text-lg md:text-xl">
        {labels?.caps ?? "CAPS"}
      </Link>
      <Link href={`/${locale}/editor`} className="hover:text-blue-400 transition-colors font-jakarta text-lg md:text-xl">
        {labels?.editor ?? "EDITOR"}
      </Link>
      <Link href={`/${locale}/process`} className="hover:text-blue-400 transition-colors font-jakarta text-lg md:text-xl">
        {labels?.process ?? "PROCESS"}
      </Link>
      <Link href={`/${locale}/contact`} className="hover:text-blue-400 transition-colors font-jakarta text-lg md:text-xl">
        {labels?.contact ?? "CONTACT"}
      </Link>
    </nav>
  )
}