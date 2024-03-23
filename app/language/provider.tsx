import { PropsWithChildren, useCallback, useState } from 'react'
import { LanguageContext } from './context'
import { Language, Locale } from 'app/types'

const languages: Record<Locale, Language> = {
  en: { emoji: '🇬🇧', locale: 'en', name: 'English' },
  sv: { emoji: '🇸🇪', locale: 'sv', name: 'Svenska' },
}

function getStoredLocale() {
  return window.localStorage.getItem('locale') as Locale | null
}

function setStoredLocale(newLocale: Locale) {
  window.localStorage.setItem('locale', newLocale)
}

const fallbackLocale: Locale = 'sv'

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const storedLocale = getStoredLocale()
  const [locale, setLocale] = useState<Locale>(storedLocale ?? fallbackLocale)
  const [allowCookies, setAllowCookies] = useState(!!storedLocale)

  const updateLocale = useCallback(
    (newLocale: Locale, saveCookie?: boolean) => {
      if (saveCookie) {
        setAllowCookies(true)
        setStoredLocale(newLocale)
      }
      setLocale(newLocale)
    },
    [locale]
  )

  const language = locale === 'sv' ? languages.sv : languages.en
  const nextLanguage = locale === 'sv' ? languages.en : languages.sv

  const value = {
    changeLanguage: (saveCookie?: boolean) =>
      updateLocale(nextLanguage.locale, saveCookie),
    allowCookies,
    language,
    nextLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
