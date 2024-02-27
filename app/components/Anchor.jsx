import PropTypes from 'prop-types'
import React from 'react'

const Anchor = ({ children, href, label, target, onClick }) => {
  const handleClick = (event) => {
    if (onClick) {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <a href={href} target={target} onClick={handleClick}>
      {children || label || href}
    </a>
  )
}

Anchor.defaultProps = {
  children: null,
  href: '',
  label: '',
  target: '_blank',
  onClick: undefined,
}

Anchor.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  label: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
}

export default Anchor
