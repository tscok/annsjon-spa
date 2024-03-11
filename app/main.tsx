import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyles from './site/GlobalStyles'
import { LanguageProvider } from './site/LanguageContext'
import { Router } from './router'

const domNode = document.getElementById('root')
const root = createRoot(domNode as HTMLElement)

root.render(
  <StrictMode>
    <LanguageProvider>
      <GlobalStyles />
      <Router />
    </LanguageProvider>
  </StrictMode>
)
