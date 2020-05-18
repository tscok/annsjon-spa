import Cookies from 'js-cookie'
import React, { createContext, useState } from 'react'

const LanguageContext = createContext({
  language: 'se',
  changeLanguage: () => {},
})

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(Cookies.get('language'))

  const changeLanguage = (language) => {
    setLanguage(language)
    Cookies.set('language', language, { expires: 365 })
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export { LanguageProvider }

export default LanguageContext
