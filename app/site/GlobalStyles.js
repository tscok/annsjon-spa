import { Global } from '@emotion/core'

const styles = {
  'html, body': {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
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
  {},
)

export { media }

export default GlobalStyles
