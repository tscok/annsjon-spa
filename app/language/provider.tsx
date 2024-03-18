import { PropsWithChildren, useCallback, useState } from 'react'
import { LanguageContext } from './context'
import { useLocalStorage } from 'app/utils/use-local-storage'
import { Language, Locale } from 'app/types'

const languages: Record<Locale, Language> = {
  en: { emoji: '🇬🇧', locale: 'en', name: 'English' },
  sv: { emoji: '🇸🇪', locale: 'sv', name: 'Svenska' },
}

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [getStored, setStored] = useLocalStorage<Locale>('locale')
  const [locale, setLocale] = useState<Locale>(getStored() ?? 'sv')

  const changeLocale = useCallback(
    (newLocale: Locale) => {
      setStored(newLocale)
      setLocale(newLocale)
    },
    [locale]
  )

  const nextLanguage = locale === 'sv' ? languages.en : languages.sv

  const value = {
    changeLanguage: () => changeLocale(nextLanguage.locale),
    locale,
    nextLanguage,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
