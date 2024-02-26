import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

const styles = css`
  color: #999;
  display: block;
  font-size: 16px;

  :before {
    content: '\u2014 ';
  }
`

const Author = ({ children }) => <span css={styles}>{children}</span>

Author.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Author
