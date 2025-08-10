"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n/locales"

export function HeaderLogo({ locale }: { locale?: string }) {
  const pathname = usePathname()
  const seg = (pathname?.split("/")[1] || "it")
  const current = locales.includes(seg as any) ? seg : (locale || "it")

  return (
    <Link href={`/${current}`} className="flex items-center transition-transform duration-300 transform hover:scale-110">
      <Image src="/images/logo.png" alt="AstroCap Logo" width={180} height={180} className="h-14 w-auto" />
    </Link>
  )
}