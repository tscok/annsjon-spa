import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

const base = css`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`

const Background = ({ height, position, size, source }) => {
  const custom = {
    backgroundImage: `url('${source}')`,
    backgroundPosition: position,
    height,
    ...(size && { backgroundSize: size }),
  }

  return <div css={[base, custom]} />
}

Background.defaultProps = {
  position: '50%',
  size: undefined,
}

Background.propTypes = {
  height: PropTypes.string.isRequired,
  position: PropTypes.string,
  size: PropTypes.string,
  source: PropTypes.string.isRequired,
}

export default Background
