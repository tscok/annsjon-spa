import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

import { media } from './GlobalStyles'

const anchor = css`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 50px;

  ${media.medium} {
    display: none;
  }
`

const bar = css`
  width: 20px;
  height: 2px;
  background-color: #000;
  border-radius: 2px;
`

const icon = css`
  ${bar};
  position: relative;
  :before,
  :after {
    ${bar};
    content: '';
    display: block;
    position: absolute;
  }
  :before {
    top: -5px;
  }
  :after {
    bottom: -5px;
  }
`

const iconActive = css`
  background-color: transparent;
  :before,
  :after {
    top: 0;
  }
  :before {
    transform: rotate(-45deg);
  }
  :after {
    transform: rotate(45deg);
  }
`

const SiteHeaderBurger = ({ isExpanded, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault()
    onClick()
  }

  return (
    <a href="" css={anchor} onClick={handleClick}>
      <span css={[icon, isExpanded && iconActive]} />
    </a>
  )
}

SiteHeaderBurger.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default SiteHeaderBurger
