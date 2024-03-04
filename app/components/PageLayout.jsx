import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

import { media } from '../site/GlobalStyles'

const base = css`
  margin: 0 auto;
  max-width: 620px;

  ${media.medium} {
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 620px 1.5fr;
    margin: 0;
    max-width: none;

    article {
      grid-column-start: 2;
    }
  }

  img {
    width: 100%;
  }
`

const main_aside = css`
  display: grid;
  gap: 40px;
  grid-template-columns: 1fr 200px;
  margin: 0 auto;
  max-width: 900px;
`

const nav_main = css`
  display: grid;
  gap: 40px;
  grid-template-columns: 200px 1fr;
  margin: 0;
  max-width: 900px;
`

const layouts = {
  main_aside,
  nav_main,
}

const PageLayout = ({ children, layout }) => {
  return <div css={[base, layout && layouts[layout]]}>{children}</div>
}

PageLayout.defaultProps = {
  layout: undefined,
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.oneOf(['main_aside', 'nav_main']),
}

export default PageLayout
