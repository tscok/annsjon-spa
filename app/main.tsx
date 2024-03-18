import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { LanguageProvider } from './utils/use-language'
import { Router } from './router'
import { ThemeProvider } from './ui/theme/theme-provider'

const domNode = document.getElementById('root')
const root = createRoot(domNode as HTMLElement)

root.render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
)
