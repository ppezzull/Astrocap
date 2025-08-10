import Link from "next/link"
import { Button } from "@/components/ui/button"
import { locales } from "@/lib/i18n/locales"

interface HeaderCtaButtonProps {
  compact?: boolean
  label?: string
}

export function HeaderCtaButton({ compact = false, label = "DRIP NOW!" }: HeaderCtaButtonProps) {
  const baseClasses = "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold tracking-wide shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-deardorf"
  const sizeClasses = compact ? "px-3 py-1 text-lg" : "px-6 py-2 text-2xl"
  const pathname = typeof window !== "undefined" ? window.location.pathname : "/it"
  const seg = pathname.split("/")[1]
  const localePrefix = locales.includes(seg as any) ? `/${seg}` : "/it"

  return (
    <Link href={`${localePrefix}/contact`}>
      <Button className={`${baseClasses} ${sizeClasses}`}>
        {label}
      </Button>
    </Link>
  )
} 