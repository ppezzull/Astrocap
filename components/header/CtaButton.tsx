"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { locales } from "@/lib/i18n/locales"

interface HeaderCtaButtonProps {
  compact?: boolean
  label?: string
  // receive locale from parent (computed via usePathname in Header)
  locale?: string
}

export function HeaderCtaButton({ compact = false, label = "DRIP NOW!", locale }: HeaderCtaButtonProps) {
  const baseClasses = "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold tracking-wide shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-jakarta"
  const sizeClasses = compact ? "px-3 py-1 text-lg" : "px-6 py-2 text-2xl"

  // Use provided locale if available; otherwise fallback to 'it'
  const seg = locale ?? "it"
  const localePrefix = locales.includes(seg as any) ? `/${seg}` : "/it"

  return (
    <Link href={`${localePrefix}/contact`}>
      <Button className={`${baseClasses} ${sizeClasses}`}>
        {label}
      </Button>
    </Link>
  )
}