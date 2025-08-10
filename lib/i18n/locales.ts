export const locales = ["it", "en", "fil"] as const
export type Locale = typeof locales[number]

export const defaultLocale: Locale = "it"

