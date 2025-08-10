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
    // Exclude API routes, Next internals, and static asset files (with extensions)
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\.(?:png|jpg|jpeg|gif|svg|webp|ico|txt|woff|woff2|ttf|otf)).*)',
  ],
}

