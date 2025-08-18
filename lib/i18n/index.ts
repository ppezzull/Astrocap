import { type Locale } from "./locales"
import it from "./dictionaries/it"
import en from "./dictionaries/en"
import fil from "./dictionaries/fil"
import es from "./dictionaries/es"

const dictionaries = { it, en, fil, es }

// Use the Italian dictionary shape as the canonical Dictionary type
export type Dictionary = typeof it

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return (dictionaries[locale] ?? dictionaries.it) as Dictionary
}

export function getDictionarySync(locale: Locale): Dictionary {
  return (dictionaries[locale] ?? dictionaries.it) as Dictionary
}

