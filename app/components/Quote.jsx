import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

const styles = css`
  padding: 0 15px;
  border-left: 4px solid #999;
`

const Quote = ({ children }) => <blockquote css={styles}>{children}</blockquote>

Quote.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Quote
