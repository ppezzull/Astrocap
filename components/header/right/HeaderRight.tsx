"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { LanguageSelector } from "../LanguageSelector"
import { HeaderCtaButton } from "../CtaButton"

export function HeaderRight() {
  const isMobile = useIsMobile()

  return (
    <div className="flex items-center" style={{ minWidth: 0 }}>
      {isMobile ? (
        <div className="flex items-center gap-2">
          <LanguageSelector />
          <HeaderCtaButton compact />
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LanguageSelector />
          <HeaderCtaButton />
        </div>
      )}
    </div>
  )
}
