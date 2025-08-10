import Link from "next/link"

export function HeaderNav() {
  return (
    <>
      <Link
        href="/caps"
        className="text-white hover:text-blue-400 transition-colors font-bold text-2xl tracking-wide font-deardorf"
      >
        CAPS
      </Link>
      <Link
        href="/process"
        className="text-white hover:text-blue-400 transition-colors font-bold text-2xl tracking-wide font-deardorf"
      >
        PROCESS
      </Link>
      <Link
        href="/contact"
        className="text-white hover:text-blue-400 transition-colors font-bold text-2xl tracking-wide font-deardorf"
      >
        CONTACT
      </Link>
    </>
  )
} 