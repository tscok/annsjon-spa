import PropTypes from 'prop-types'
import React from 'react'

const Image = ({ alt, source }) => <img alt={alt} src={source} css={{ width: '100%' }} />

Image.defaultProps = {
  alt: '',
}

Image.propTypes = {
  alt: PropTypes.string,
  source: PropTypes.string.isRequired,
}

export default Image
