import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

import { media } from './GlobalStyles'

const text = css`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  line-height: 40px;
  text-transform: uppercase;
`

const pseudo = css`
  content: '';
  display: block;
  position: absolute;
  background-color: transparent;
`

const link = css`
  display: block;
  position: relative;
  text-decoration: none;

  :before {
    ${pseudo};
    bottom: 0;
    left: -20px;
    top: 0;
    width: 5px;
  }

  &,
  :hover {
    color: #444;
  }

  :hover:before {
    background-color: #ccc;
  }

  ${media.medium} {
    line-height: 80px;
    margin-right: 20px;

    &:last-of-type {
      margin-right: 10px;
    }

    :before {
      display: none;
    }

    :after {
      ${pseudo};
      bottom: 0;
      height: 3px;
      left: 0;
      right: 0;
      transition: all 250ms;
    }

    :hover:after {
      background-color: #ccc;
    }
  }
`

const linkActive = css`
  :before,
  :after {
    background-color: #444;
  }

  :hover:before {
    background-color: #444;
  }

  ${media.medium} {
    :hover:after {
      background-color: #444;
    }
  }
`

const SiteHeaderNavItem = ({ children, isActive, route }) => (
  <Link to={route} css={[link, isActive && linkActive]}>
    <span css={text}>{children}</span>
  </Link>
)

SiteHeaderNavItem.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
  route: PropTypes.string.isRequired,
}

export default SiteHeaderNavItem
