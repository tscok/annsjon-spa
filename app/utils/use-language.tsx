import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react'
import { Language, Locale } from 'app/types'

type LanguageContextProps = {
  isEnglish: boolean
  locale: Locale
  nextLanguage: Language
  setLanguage: SetLanguage
}

type SetLanguage = (newLocale: Locale) => void

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
)

type Getter<T> = () => T | null
type Setter = (value: any) => void

const languages: Record<Locale, Language> = {
  en: { emoji: '🇬🇧', locale: 'en', name: 'English' },
  sv: { emoji: '🇸🇪', locale: 'sv', name: 'Svenska' },
}

function useLocalStorage<T>(key: string): [Getter<T>, Setter] {
  const get = () => window.localStorage.getItem(key) as T | null
  const set = (value: any) => window.localStorage.setItem(key, value)
  return [get, set]
}

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [getStored, setStored] = useLocalStorage<Locale>('locale')
  const [locale, setLocale] = useState(getStored() ?? 'sv')

  const setLanguage = useCallback<SetLanguage>(
    (newLocale) => {
      setStored(newLocale)
      setLocale(newLocale)
    },
    [locale]
  )

  const value = {
    isEnglish: locale === 'en',
    locale,
    nextLanguage: locale === 'en' ? languages['sv'] : languages['en'],
    setLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used with LanguageProvider')
  }
  return context
}
