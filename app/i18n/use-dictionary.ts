import { useContext } from 'react'
import { I18nContext } from './context'
import { Dictionary, TranslateFn } from './types'

export function useDictionary<N extends keyof Dictionary>(
  namespace: N
): TranslateFn<Dictionary[N]> {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useDictionary must be used with I18nProvider')
  }
  return (key) => context.dictionary[namespace][key] ?? key
}
