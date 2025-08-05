import type React from "react"
import type { Metadata } from "next"
import { jakarta } from "@/app/fonts"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"


export const metadata: Metadata = {
  title: "AstroCap - Cappelli Personalizzati con Brillantini",
  description:
    "Cappelli personalizzati con cristalli e brillantini. Ogni cappello racconta la tua storia, con fiamme e stile.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it" className={jakarta.variable}>
      <body className="bg-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
