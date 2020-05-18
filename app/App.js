import React, { Fragment, useState } from 'react'
import RiotControl from 'riotcontrol'

import Footer from './site/Footer'
import Header from './site/Header'
import { LanguageProvider } from './site/LanguageContext'
import StartPage from './start-page/StartPage'

import utils from '../assets/js/utils'

const App = ({ children }) => {
  const [isStartPage, setStartPage] = useState(true)

  RiotControl.on('ROUTE', (route) => {
    setStartPage(route === '')
    utils.scrollUp()
  })

  return (
    <LanguageProvider>
      <Fragment>
        <div className="site">
          <Header />
          {isStartPage && <StartPage />}
          {children}
        </div>
        <Footer />
      </Fragment>
    </LanguageProvider>
  )
}

export default App
