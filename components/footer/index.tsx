"use client"

import { useEffect, useState } from "react"
import { FooterCopyright } from "./Copyright"
import { FooterNav } from "./Nav"
import { FooterSocials } from "./Socials"
import type { Dictionary } from "@/lib/i18n"
import { usePathname } from "next/navigation"
import { locales } from "@/lib/i18n/locales"
import { getDictionary } from "@/lib/i18n"

export default function Footer({ dict: dictProp, locale: localeProp }: { dict?: Dictionary; locale?: string }) {
  const pathname = usePathname()
  const seg = (pathname?.split("/")[1] || "it")
  const locale = (localeProp as any) || (locales.includes(seg as any) ? seg : "it")
  const [dict, setDict] = useState<Dictionary | undefined>(dictProp)

  useEffect(() => {
    if (!dictProp) {
      getDictionary(locale as any).then(setDict)
    }
  }, [locale, dictProp])

  const labels = {
    home: dict?.nav.home ?? "HOME",
    caps: dict?.nav.caps ?? "CAPS",
    process: dict?.nav.process ?? "PROCESS",
  contact: dict?.nav.contact ?? "CONTACT",
  editor: (dict as any)?.nav?.editor ?? "EDITOR",
  }

  return (
    <footer style={{ backgroundColor: "rgb(15, 58, 175)" }} className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <FooterCopyright text={dict?.footer.crafted} />
          <FooterNav labels={labels} />
          <FooterSocials />
        </div>
      </div>
    </footer>
  )
} 