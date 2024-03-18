import { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import MuiThemeProvider from '@mui/material/styles/ThemeProvider'
import { theme } from './theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
