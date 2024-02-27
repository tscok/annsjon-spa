import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

const SelectOption = ({ children, value }) => <option value={value}>{children}</option>

SelectOption.defaultProps = {
  value: '',
}

SelectOption.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string,
}

const styles = css`
  width: 100%;
`

const Select = ({ children, disabled, label, name, onChange, required, value }) => {
  const handleChange = ({ target }) => target.value && onChange(name, target.value)

  return (
    <select
      css={styles}
      disabled={disabled}
      name={name}
      onChange={handleChange}
      required={required}
      value={value}
    >
      <SelectOption>{label}</SelectOption>
      {children}
    </select>
  )
}

Select.defaultProps = {
  children: null,
  disabled: false,
  required: false,
  value: '',
}

Select.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
}

export { SelectOption }

export default Select
