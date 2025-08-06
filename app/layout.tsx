import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"; // or "@/components/ui/toaster" if that's your implementation

export const metadata: Metadata = {
  title: "AstroCap - Cappelli Personalizzati con Brillantini",
  description:
    "Cappelli personalizzati con cristalli e brillantini. Ogni cappello racconta la tua storia, con fiamme e stile.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="bg-black font-deardorf">
        <Header />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
