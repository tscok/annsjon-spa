import PropTypes from 'prop-types'
import React from 'react'

const Email = ({ label, to }) => <a href={`mailto:${to}`}>{label || to}</a>

Email.defaultProps = {
  label: undefined,
}

Email.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string.isRequired,
}

export default Email
