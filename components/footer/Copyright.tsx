export function FooterCopyright({ text }: { text?: string }) {
  return (
    <p className="text-center md:text-left font-bold font-deardorf text-2xl">
      {text ?? "Crafted with fire and style — AstroCap © 2025"}
    </p>
  )
}