import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

const styles = css`
  input {
    margin: 0;
  }

  label {
    display: inline-block;
    font-weight: normal;
    margin: 0 20px 0 10px;
  }
`

const Checkbox = ({ checked, label, name, onChange, value }) => {
  const handleChange = ({ target }) => {
    onChange(name, target.checked ? value : undefined)
  }

  return (
    <span css={styles}>
      <input
        checked={checked}
        id={name}
        name={name}
        onChange={handleChange}
        type="checkbox"
        value={value}
      />
      <label htmlFor={name}>{label}</label>
    </span>
  )
}

Checkbox.defaultProps = {
  checked: false,
  label: undefined,
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Checkbox
