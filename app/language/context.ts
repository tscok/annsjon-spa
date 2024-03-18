import { Language, Locale } from 'app/types'
import { createContext } from 'react'

export type LanguageContextProps = {
  changeLanguage: () => void
  locale: Locale
  nextLanguage: Language
}

export const LanguageContext = createContext<LanguageContextProps | null>(null)
