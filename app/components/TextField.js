import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

const styles = css`
  width: 100%;
  margin: 0;
`

const TextField = ({ name, onChange, placeholder, required, value }) => {
  const handleChange = ({ target }) => onChange(name, target.value)

  return (
    <input
      css={styles}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      required={required}
      type="text"
      value={value}
    />
  )
}

TextField.defaultProps = {
  placeholder: undefined,
  required: false,
  value: '',
}

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  value: PropTypes.string,
}

export default TextField
