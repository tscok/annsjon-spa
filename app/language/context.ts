import { Language } from 'app/types'
import { createContext } from 'react'

export type LanguageContextProps = {
  changeLanguage: ChangeLanguage
  allowCookies: boolean
  language: Language
  nextLanguage: Language
}

export type ChangeLanguage = (saveCookie?: boolean) => void

export const LanguageContext = createContext<LanguageContextProps | null>(null)
