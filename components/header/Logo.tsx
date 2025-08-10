import Link from "next/link"
import Image from "next/image"

export function HeaderLogo() {
  return (
    <Link href="/" className="flex items-center transition-transform duration-300 transform hover:scale-110">
      <Image src="/images/logo.png" alt="AstroCap Logo" width={180} height={180} className="h-14 w-auto" />
    </Link>
  )
} 