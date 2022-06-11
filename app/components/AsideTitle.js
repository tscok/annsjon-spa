import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

import { media } from 'app/site/GlobalStyles'

const styles = css`
  color: #444;
  display: none;
  font-size: 16px;
  font-weight: bold;

  ${media.medium} {
    display: block;
  }
`

const AsideTitle = ({ children }) => <h4 css={styles}>{children}</h4>

AsideTitle.propTypes = {
  children: PropTypes.string.isRequired,
}

export default AsideTitle
