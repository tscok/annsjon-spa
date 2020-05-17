import React, { Fragment, useState } from 'react'
import RiotControl from 'riotcontrol'

import Footer from './site/Footer'
import Header from './site/Header'
import StartPage from './start-page/StartPage'

import utils from '../assets/js/utils'

const App = ({ children }) => {
  const [isStartPage, setStartPage] = useState(true)
  const [language, setLanguage] = useState('')

  RiotControl.on('ROUTE', route => setStartPage(route === ''))

  RiotControl.on('SITE_LANGUAGE', lang => {
    setLanguage(lang)
    utils.scrollUp()
  })

  return (
    <Fragment>
      <div className="site">
        <Header />
        {isStartPage && <StartPage language={language} />}
        {children}
      </div>
      <Footer />
    </Fragment>
  )
}

export default App
