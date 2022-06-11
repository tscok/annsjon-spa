import PropTypes from 'prop-types'
import React from 'react'

const colors = {
  black: '#000',
  gray: '#ddd',
  white: '#fff',
}

const sizes = {
  small: '100px',
  medium: '50%',
  large: '100%',
}

const base = {
  height: 0,
  borderWidth: 0,
  borderStyle: 'solid',
}

const Divider = ({ color, size, slim, vertical }) => {
  const cssHorizontal = {
    ...base,
    display: 'block',
    margin: `${slim ? 10 : 30}px auto`,
    borderColor: colors[color],
    borderTopWidth: '1px',
    width: sizes[size],
  }

  const cssVertical = {
    ...base,
    display: 'inline',
    height: '20px',
    margin: '0 10px',
    borderColor: colors[color],
    borderLeftWidth: '1px',
  }

  return <hr css={vertical ? cssVertical : cssHorizontal} />
}

Divider.defaultProps = {
  color: 'gray',
  size: 'large',
  slim: false,
  vertical: false,
}

Divider.propTypes = {
  color: PropTypes.oneOf(['black', 'gray', 'white']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  slim: PropTypes.bool,
  vertical: PropTypes.bool,
}

export default Divider
