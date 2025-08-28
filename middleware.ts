import { NextResponse, type NextRequest } from "next/server"
import { locales, defaultLocale } from "@/lib/i18n/locales"

function getLocaleFromPath(pathname: string) {
  const first = pathname.split("/")[1]
  if (locales.includes(first as any)) return first
  return null
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hasLocale = getLocaleFromPath(pathname)
  if (!hasLocale) {
    const url = request.nextUrl.clone()
    url.pathname = `/${defaultLocale}${pathname}`
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
  // Exclude API routes, Next internals, and ANY static asset with an extension (e.g. .png, .gltf, .bin, .css, .js, etc.)
  // Also exclude common files like sitemap and robots.
  '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
}

