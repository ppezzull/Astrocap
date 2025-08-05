import localFont from "next/font/local"

export const jakarta = localFont({
  src: [
    {
      path: "../fonts/jak-arta/JAK_ARTA.otf",
      weight: "700",
      style: "normal"
    },
    {
      path: "../fonts/jak-arta/JAK ARTA.ttf",
      weight: "400",
      style: "normal"
    }
  ],
  variable: "--font-title-jakarta",
  display: "swap"
})

