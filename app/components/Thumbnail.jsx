import PropTypes from 'prop-types'
import React from 'react'

const sizes = {
  small: '40px',
  large: '100px',
}

const Thumbnail = ({ position, size, source }) => {
  const css = {
    backgroundImage: `url('${source}')`,
    backgroundPosition: position,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderRadius: '50%',
    height: sizes[size],
    width: sizes[size],
  }

  return <figure css={css} />
}

Thumbnail.defaultProps = {
  position: '50%',
  size: 'large',
}

Thumbnail.propTypes = {
  position: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
  source: PropTypes.string.isRequired,
}

export default Thumbnail
