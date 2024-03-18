import { createContext } from 'react'
import { Dictionary } from './types'

export type I18nContextProps = {
  dictionary: Dictionary
}

export const I18nContext = createContext<I18nContextProps | null>(null)
