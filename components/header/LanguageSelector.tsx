"use client"

import { usePathname, useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"
import { locales, type Locale } from "@/lib/i18n/locales"

function replaceLocaleInPath(pathname: string, nextLocale: string) {
  const segments = pathname.split("/")
  if (locales.includes(segments[1] as any)) {
    segments[1] = nextLocale
    return segments.join("/")
  }
  return `/${nextLocale}${pathname}`
}

export function LanguageSelector() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLocale = (pathname?.split("/")[1] || "it") as Locale

  return (
    <Select
      value={currentLocale}
      onValueChange={(next) => {
        const nextPath = replaceLocaleInPath(pathname || "/", next)
        router.push(nextPath)
      }}
    >
      <SelectTrigger className="w-20 bg-transparent border-blue-500/50 text-white">
        <span className="flex items-center gap-2">
          <SelectValue />
        </span>
      </SelectTrigger>
      <SelectContent className="bg-black border-blue-500/50">
        <SelectItem value="it" className="text-white">🇮🇹</SelectItem>
        <SelectItem value="en" className="text-white">🇬🇧</SelectItem>
        <SelectItem value="fil" className="text-white">🇵🇭</SelectItem>
      </SelectContent>
    </Select>
  )
}