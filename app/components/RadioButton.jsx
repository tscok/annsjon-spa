import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

const styles = css`
  label {
    display: inline-block;
    font-weight: normal;
    margin: 0 20px 0 10px;
  }
`

const RadioButton = ({ checked, label, name, onChange, required, value }) => {
  const handleChange = ({ target }) => target.checked && onChange(name, value)

  return (
    <span css={styles}>
      <input
        checked={checked}
        id={value}
        name={name}
        onChange={handleChange}
        required={required}
        type="radio"
        value={value}
      />
      <label htmlFor={value}>{label}</label>
    </span>
  )
}

RadioButton.defaultProps = {
  checked: false,
  label: undefined,
  required: false,
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
}

export default RadioButton
