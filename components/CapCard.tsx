"use client"

import Image from "next/image"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import { CardContent } from "./ui/card"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n/locales"
import { getDictionary } from "@/lib/i18n"

export interface CapCardProps {
  src: string
  name: string
  style: string
}

export function CapCard({ src, name, style }: CapCardProps) {
  const pathname = usePathname()
  const seg = (pathname?.split("/")[1] || "it")
  const locale = locales.includes(seg as any) ? (seg as any) : "it"
  // reserved for future localized labels/aria
  // const [dict, setDict] = React.useState<any>(null)
  // React.useEffect(() => { getDictionary(locale).then(setDict) }, [locale])
  return (
    <div className="w-full max-w-lg mx-auto h-full group hover:scale-105 transition-all duration-300">
      <CardContent className="p-0">
        <BackgroundGradient className="rounded-[22px] bg-gray-900 border-blue-500/30 hover:border-blue-500 transition-all duration-300 h-full">
          <div className="relative overflow-hidden flex justify-center items-center rounded-t-[22px]" style={{ height: "300px" }}>
            <div className="" />
            <Image
              src={src || "/placeholder.svg"}
              alt={name}
              width={260}
              height={260}
              className="object-contain h-64 w-auto mx-auto"
              style={{ maxHeight: "260px" }}
            />
          </div>
          <div className="p-6 md:p-8 min-h-[140px] md:min-h-[200px] flex flex-col justify-end">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-jakarta">{name}</h3>
            <p className="text-2xl md:text-3xl text-blue-400 font-semibold font-jakarta">{style}</p>
          </div>
        </BackgroundGradient>
      </CardContent>
    </div>
  )
}
