"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n/locales"

export function FooterNav({ labels }: { labels?: { home: string; caps: string; process: string; contact: string } }) {
  const pathname = usePathname()
  const seg = (pathname?.split("/")[1] || "it")
  const locale = locales.includes(seg as any) ? seg : "it"

  return (
    <nav className="flex space-x-6">
      <Link href={`/${locale}`} className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
        {labels?.home ?? "HOME"}
      </Link>
      <Link href={`/${locale}/caps`} className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
        {labels?.caps ?? "CAPS"}
      </Link>
      <Link href={`/${locale}/process`} className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
        {labels?.process ?? "PROCESS"}
      </Link>
      <Link href={`/${locale}/contact`} className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
        {labels?.contact ?? "CONTACT"}
      </Link>
    </nav>
  )
}