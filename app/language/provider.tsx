import { PropsWithChildren, useCallback, useState } from 'react'
import { LanguageContext } from './context'
import { Language, Locale } from 'app/types'

const languages: Record<Locale, Language> = {
  en: { emoji: '🇬🇧', locale: 'en', name: 'English' },
  sv: { emoji: '🇸🇪', locale: 'sv', name: 'Svenska' },
}

function getLocalStorageLocale() {
  return window.localStorage.getItem('locale') as Locale | null
}

function setLocalStorageLocale(newLocale: Locale) {
  window.localStorage.setItem('locale', newLocale)
}

const fallbackLocale: Locale = 'sv'

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const storedLocale = getLocalStorageLocale()
  const [cookiesEnabled, setCookiesEnabled] = useState(!!storedLocale)
  const [locale, setLocale] = useState<Locale>(storedLocale ?? fallbackLocale)

  const enableCookies = useCallback(() => {
    setCookiesEnabled(true)
    setLocalStorageLocale(locale)
  }, [locale])

  const updateLocale = useCallback(
    (newLocale: Locale) => {
      if (cookiesEnabled) {
        setLocalStorageLocale(newLocale)
      }
      setLocale(newLocale)
    },
    [cookiesEnabled, locale]
  )

  const language = locale === 'sv' ? languages.sv : languages.en
  const nextLanguage = locale === 'sv' ? languages.en : languages.sv

  const value = {
    changeLanguage: () => updateLocale(nextLanguage.locale),
    cookiesEnabled,
    enableCookies,
    language,
    nextLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
