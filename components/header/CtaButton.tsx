import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderCtaButtonProps {
  compact?: boolean
}

export function HeaderCtaButton({ compact = false }: HeaderCtaButtonProps) {
  const baseClasses = "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold tracking-wide shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-deardorf"
  const sizeClasses = compact ? "px-3 py-1 text-lg" : "px-6 py-2 text-2xl"

  return (
    <Link href="/contact">
      <Button className={`${baseClasses} ${sizeClasses}`}>
        DRIP NOW!
      </Button>
    </Link>
  )
} 