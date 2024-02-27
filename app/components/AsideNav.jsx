import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'
import { NavLink } from 'react-router-dom'

import AsideTitle from './AsideTitle'

import { media } from '../site/GlobalStyles'

const styles = css`
  ${media.medium} {
    position: sticky;
    top: 130px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    flex: 1;
    margin-bottom: 40px;

    ${media.medium} {
      display: block;
    }
  }

  li {
    border-right: 1px solid #eee;
    margin-right: 10px;
    padding-right: 10px;
    :last-of-type {
      border-right: 0;
    }

    ${media.medium} {
      border: 0;
      margin: 0 0 10px;
      padding: 0;
    }
  }
`

const AsideNav = ({ items, title }) => (
  <nav css={styles}>
    <AsideTitle>{title}</AsideTitle>
    <ul>
      {items.map(({ label, route }) => (
        <li key={route}>
          <NavLink activeStyle={{ color: 'inherit' }} to={route}>
            {label}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
)

AsideNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
}

export default AsideNav
