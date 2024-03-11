import GlobalStyles from './site/GlobalStyles'
import { LanguageProvider } from './site/LanguageContext'
import { AppRouter } from './app-router'

export const App = () => (
  <LanguageProvider>
    <GlobalStyles />
    <AppRouter />
  </LanguageProvider>
)
