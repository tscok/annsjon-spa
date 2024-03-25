import { Language } from 'app/types'
import { createContext } from 'react'

export type LanguageContextProps = {
  changeLanguage: () => void
  cookiesEnabled: boolean
  enableCookies: () => void
  language: Language
  nextLanguage: Language
}

export const LanguageContext = createContext<LanguageContextProps | null>(null)
