import { type Locale } from "./locales"
import it from "./dictionaries/it"
import en from "./dictionaries/en"
import fil from "./dictionaries/fil"

const dictionaries = { it, en, fil } as const

export type Dictionary = typeof dictionaries.it

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale] ?? dictionaries.it
}

export function getDictionarySync(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.it
}

