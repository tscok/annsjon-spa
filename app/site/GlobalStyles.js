import { Global } from '@emotion/core'
import './skeleton.css'

const styles = {
  html: {
    fontSize: '62.5%',
  },
  'html, body': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
  },
  body: {
    fontSize: '1.5em',
    lineHeight: 1.6,
    fontWeight: 400,
    fontFamily:
      '"Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#222',
  },
  h4: {
    letterSpacing: 0,
    color: '#999',
  },
  h5: {
    letterSpacing: 0,
    marginBottom: '1rem',
  },
  '#spa-root': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  main: {
    flex: 1,
  },
}

const GlobalStyles = () => <Global styles={styles} />

const sizes = { small: 680, medium: 960, large: 1180 }

const media = Object.keys(sizes).reduce(
  (acc, size) => ({ ...acc, [size]: `@media (min-width: ${sizes[size]}px)` }),
  {}
)

export { media }

export default GlobalStyles
