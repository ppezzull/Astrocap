import Link from "next/link"

export function HeaderNav({
  locale = "it",
  labels = { caps: "CAPS", process: "PROCESS", contact: "CONTACT" },
}: {
  locale?: string
  labels?: { caps: string; process: string; contact: string }
}) {
  return (
    <>
      <Link
        href={`/${locale}/caps`}
        className="text-white hover:text-blue-400 transition-colors font-bold text-2xl tracking-wide font-deardorf"
      >
        {labels.caps}
      </Link>
      <Link
        href={`/${locale}/process`}
        className="text-white hover:text-blue-400 transition-colors font-bold text-2xl tracking-wide font-deardorf"
      >
        {labels.process}
      </Link>
      <Link
        href={`/${locale}/contact`}
        className="text-white hover:text-blue-400 transition-colors font-bold text-2xl tracking-wide font-deardorf"
      >
        {labels.contact}
      </Link>
    </>
  )
}