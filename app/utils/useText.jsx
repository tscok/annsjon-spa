import React, { Fragment } from 'react'

import translations from './translations'
import {useLanguageContext} from '../site/LanguageContext'

const getText = (language, key) => {
  if (translations[key] && translations[key][language]) {
    return translations[key][language]
  }
  return key
}

const useText = () => {
  const { currentLanguage } = useLanguageContext()
  return (key) => getText(currentLanguage, key)
}

const interpolate = (text, values) => {
  const pattern = /([$][0-9]+)/g
  const matches = text.match(pattern)
  const parts = text.split(pattern)

  if (!matches) {
    return text
  }

  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>{matches.includes(part) ? values[part] : part}</Fragment>
  ))
}

export { interpolate }

export default useText
