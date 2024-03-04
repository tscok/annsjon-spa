import { Global } from '@emotion/react'
import './skeleton.css'

const styles = {
  html: {
    fontSize: '62.5%',
  },
  body: {
    fontSize: '1.6em',
    lineHeight: 1.6,
    fontWeight: 300,
    fontFamily:
      '"Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif',
    color: '#222',
    margin: 0,
  },
  h4: {
    letterSpacing: 0,
    color: '#999',
  },
  h5: {
    letterSpacing: 0,
    marginBottom: '1rem',
  },
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
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
