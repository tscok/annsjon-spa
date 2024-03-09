import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'

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

function useLocalStorage(key) {
  const get = () => window.localStorage.getItem(key)
  const set = (value) => window.localStorage.setItem(key, value)
  return [get, set]
}

const LanguageProvider = ({ children }) => {
  const [getStored, setStored] = useLocalStorage('language')
  const [language, setLanguage] = useState(getStored())

  const updateLanguage = useCallback(
    (newLanguage = LANGUAGES.SE) => {
      setStored(newLanguage)
      setLanguage(newLanguage)
    },
    [setStored, setLanguage],
  )

  useEffect(() => {
    if (!language) {
      updateLanguage()
    }
  }, [language, updateLanguage])

  if (!language) {
    return null
  }

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

export function useLanguageContext() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguageContext must be used with LanguageContext.Provider')
  }
  return ctx
}

export { LanguageProvider, LANGUAGES }

export default LanguageContext
