import PropTypes from 'prop-types'
import React from 'react'

const Label = ({ children }) => <label css={{ display: 'block' }}>{children}</label>

Label.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Label
