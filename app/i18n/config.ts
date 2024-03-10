import { Locale } from '../types'
import { useLanguageContext } from '../site/LanguageContext'
import { Dictionary, TranslateFn } from './types'

import en from './dicts/en.json'
import sv from './dicts/sv.json'

const library: Record<Locale, Dictionary> = { en, sv }

function useDictionary<N extends keyof Dictionary>(namespace: N) {
  const { isEnglish } = useLanguageContext()
  const locale: Locale = isEnglish ? 'en' : 'sv'
  const dictionary = library[locale]
  return dictionary[namespace]
}

export function useTranslation<N extends keyof Dictionary>(
  namespace: N
): TranslateFn<Dictionary[N]> {
  const dictionary = useDictionary(namespace)
  return (key) => dictionary[key]
}
