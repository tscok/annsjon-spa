import { translations } from './translations'
import { useLanguageContext } from '../site/LanguageContext'

type LegacyLocale = 'en' | 'se'
type TranslationKey = keyof typeof translations

const getText = (language: LegacyLocale, key: TranslationKey) => {
  if (translations[key] && translations[key][language]) {
    return translations[key][language]
  }
  return key
}

export const useText = () => {
  const { currentLanguage } = useLanguageContext()
  return (key: TranslationKey) => getText(currentLanguage as LegacyLocale, key)
}
