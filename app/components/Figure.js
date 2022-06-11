import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

const styles = css`
  margin: 0 0 30px;

  figcaption {
    color: #666;
    font-size: 13px;
    line-height: 30px;
  }

  img {
    display: block;
  }
`

const Figure = ({ caption, children }) => (
  <figure css={styles}>
    {children}
    {caption && <figcaption>{caption}</figcaption>}
  </figure>
)

Figure.defaultProps = {
  caption: undefined,
}

Figure.propTypes = {
  caption: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Figure
