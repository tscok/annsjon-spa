import Cookies from 'js-cookie'
import React, { createContext, useEffect, useState } from 'react'

const LANGUAGES = {
  EN: 'en',
  SE: 'se',
}

const LanguageContext = createContext({
  currentLanguage: LANGUAGES.SE,
  isEnglish: false,
  languages: LANGUAGES,
  setLanguage: () => {},
})

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(Cookies.get('language'))

  const updateLanguage = (code) => {
    setLanguage(code)
    Cookies.set('language', code, { expires: 365 })
  }

  useEffect(() => {
    if (!language) {
      updateLanguage(LANGUAGES.SE)
    }
  })

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage: language,
        isEnglish: language === LANGUAGES.EN,
        languages: LANGUAGES,
        setLanguage: updateLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider, LANGUAGES }

export default LanguageContext
