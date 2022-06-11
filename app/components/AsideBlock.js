import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

import AsideTitle from './AsideTitle'

import { media } from 'app/site/GlobalStyles'

const styles = css`
  background-color: #f5f5f5;
  padding: 20px;

  ${media.medium} {
    padding: 20px;
    font-size: 13px;
  }

  h4 {
    display: block;
    color: #888;
  }

  p {
    margin-bottom: 10px;
  }
`

const AsideBlock = ({ children, title }) => (
  <div css={styles}>
    <AsideTitle>{title}</AsideTitle>
    {children}
  </div>
)

AsideBlock.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default AsideBlock
