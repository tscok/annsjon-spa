import { PropsWithChildren } from 'react'
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '../mui'
import { theme } from './theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
