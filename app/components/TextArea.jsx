import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

const styles = css`
  width: 100%;
  margin: 0;
`

const TextArea = ({ name, onChange, required, value }) => {
  const handleChange = ({ target }) => onChange(name, target.value)

  return (
    <textarea css={styles} name={name} onChange={handleChange} required={required} value={value} />
  )
}

TextArea.defaultProps = {
  required: false,
  value: '',
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string,
}

export default TextArea
