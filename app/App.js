import React from 'react'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import AppRouter from './AppRouter'
import SiteFooter from './site/SiteFooter'
import SiteHeader from './site/SiteHeader'
import GlobalStyles from './site/GlobalStyles'
import { LanguageProvider } from './site/LanguageContext'

const history = createBrowserHistory()

const App = (props) => (
  <LanguageProvider>
    <GlobalStyles />
    <Router history={history}>
      <SiteHeader />
      <main>
        <AppRouter {...props} />
      </main>
      <SiteFooter />
    </Router>
  </LanguageProvider>
)

export default App
