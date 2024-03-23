import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './language/provider'
import { I18nProvider } from './i18n/provider'
import { ThemeProvider } from './ui/theme/theme-provider'
import { FormProvider } from './form/provider'
import { Router } from './router'

const domNode = document.getElementById('root')
const root = createRoot(domNode as HTMLElement)

root.render(
  <StrictMode>
    <LanguageProvider>
      <I18nProvider>
        <ThemeProvider>
          <FormProvider>
            <Router />
          </FormProvider>
        </ThemeProvider>
      </I18nProvider>
    </LanguageProvider>
  </StrictMode>
)
