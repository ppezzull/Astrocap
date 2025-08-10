import Link from "next/link"

export function FooterNav() {
  return (
    <nav className="flex space-x-6">
      <Link href="/" className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
        HOME
      </Link>
      <Link href="/caps" className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
        CAPS
      </Link>
      <Link href="/process" className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
        PROCESS
      </Link>
      <Link href="/contact" className="hover:text-blue-400 transition-colors font-deardorf text-2xl">
        CONTACT
      </Link>
    </nav>
  )
} 