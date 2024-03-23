import { PropsWithChildren, useEffect, useCallback, useState } from 'react'
import { Locale } from 'app/types'
import { I18nContext } from './context'
import { Dictionary } from './types'
import { useLanguage } from 'app/language/use-language'

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./dicts/en.json').then((dict) => dict.default),
  sv: () => import('./dicts/sv.json').then((dict) => dict.default),
}

export const I18nProvider = ({ children }: PropsWithChildren) => {
  const [dictionary, setDictionary] = useState<Dictionary | undefined>()
  const { language } = useLanguage()

  const changeDictionary = useCallback(async () => {
    const dict = await dictionaries[language.locale]()
    setDictionary(dict)
  }, [language.locale])

  useEffect(() => {
    changeDictionary()
  }, [language.locale])

  if (!dictionary) return null

  const value = {
    dictionary,
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
