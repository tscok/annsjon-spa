import React, { useContext } from 'react'
import { css } from '@emotion/core'

import LanguageContext from './LanguageContext'

const button = css`
  align-items: center;
  background: none;
  border: none;
  display: flex;
  font-size: 24px;
  height: 50px;
  justify-content: center;
  margin: 0;
  outline: none;
  padding-top: 4px;
  padding: 0;
  width: 50px;
`

const LanguageButton = () => {
  const { isEnglish, languages, setLanguage } = useContext(LanguageContext)

  const handleClick = (event) => {
    event.preventDefault()
    setLanguage(isEnglish ? languages.SE : languages.EN)
  }

  return (
    <button css={button} onClick={handleClick}>
      {isEnglish ? '🇸🇪' : '🇬🇧'}
    </button>
  )
}

export default LanguageButton