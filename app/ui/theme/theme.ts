import type { Theme } from '@mui/material'
import createTheme from '@mui/material/styles/createTheme'
import { sans, serif } from './fonts'

const defaultTheme = createTheme()

const typography: Partial<Theme['typography']> = {
  ...defaultTheme.typography,
  fontFamily: sans,
  h1: {
    // only used in layout/site-title
    ...defaultTheme.typography.h1,
    fontFamily: serif,
    fontWeight: 400,
  },
  h2: {
    ...defaultTheme.typography.h2,
    fontFamily: serif,
    fontSize: '3rem',
    marginBottom: '2rem',
  },
  h3: {
    ...defaultTheme.typography.h3,
    fontFamily: serif,
    fontSize: '2.5rem',
  },
  h4: {
    ...defaultTheme.typography.h4,
    fontFamily: serif,
    fontSize: '2rem',
  },
  h5: {
    ...defaultTheme.typography.h5,
    fontFamily: sans,
    fontSize: '1.25rem',
    fontWeight: 700,
  },
  h6: {
    ...defaultTheme.typography.h6,
    fontFamily: sans,
    fontSize: '1rem',
    fontWeight: 300,
    textTransform: 'uppercase',
  },
  body1: {
    ...defaultTheme.typography.body1,
    fontFamily: sans,
    fontWeight: 400,
  },
  body2: {
    ...defaultTheme.typography.body2,
    fontFamily: sans,
    fontSize: '0.9rem',
    fontWeight: 400,
  },
  caption: {
    ...defaultTheme.typography.caption,
    fontFamily: sans,
    fontWeight: 400,
    lineHeight: 2,
  },
}

const palette: Partial<Theme['palette']> = {
  ...defaultTheme.palette,
  mode: 'light',
  background: {
    ...defaultTheme.palette.background,
    default: 'rgb(240, 245, 250)',
    paper: 'rgb(255, 255, 255)',
  },
}

export const theme = createTheme({
  mixins: defaultTheme.mixins,
  palette,
  typography,
})
