import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

import { media } from '../site/GlobalStyles'

const styles = css`
  ${media.medium} {
    margin-top: 0;
    border-right: 1px solid #eee;
  }
`
const seamless = css`
  ${media.medium} {
    border: 0;
  }
`

const Aside = ({ children, right }) => <aside css={[styles, right && seamless]}>{children}</aside>

Aside.defaultProps = {
  right: false,
}

Aside.propTypes = {
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
}

export default Aside
