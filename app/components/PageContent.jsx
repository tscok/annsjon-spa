import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

import { media } from '../site/GlobalStyles'

const styles = css`
  margin: 0 20px;
  max-width: 1140px;

  ${media.large} {
    margin: 0 auto;
  }
`

const PageContent = ({ children }) => <div css={styles}>{children}</div>

PageContent.propTypes = {
  children: PropTypes.node.isRequired,
}

export default PageContent
