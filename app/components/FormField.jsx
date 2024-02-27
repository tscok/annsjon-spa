import PropTypes from 'prop-types'
import React from 'react'

import Label from './Label'

const FormField = ({ children, description, label, required, ...props }) => (
  <div {...props}>
    {label && (
      <Label>
        {label}
        {required && '*'}
      </Label>
    )}
    {description && <span>{description}</span>}
    {children}
  </div>
)

FormField.defaultProps = {
  description: undefined,
  label: undefined,
  required: false,
}

FormField.propTypes = {
  children: PropTypes.node.isRequired,
  description: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
}

export default FormField
