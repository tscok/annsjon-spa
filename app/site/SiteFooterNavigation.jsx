import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import { media } from './GlobalStyles'
import { useRoutes } from '../utils/use-routes'

const styles = css`
  font-size: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  ${media.small} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto 30px;
    max-width: 80%;
  }

  ${media.medium} {
    flex-wrap: nowrap;
    justify-content: start;
    margin: 0 0 30px;
    max-width: auto;
  }

  a {
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 50px;
    text-decoration: none;
    text-transform: uppercase;
    white-space: nowrap;

    ${media.small} {
      padding: 0 20px;
    }

    ${media.medium} {
      border-bottom: 2px solid transparent;
      line-height: 20px;
      margin-right: 20px;
      padding: 0;

      :hover {
        text-decoration: none;
        border-bottom-color: #fff;
      }
    }
  }
`

const SiteFooterNavigation = () => {
  const routes = useRoutes().filter((route) => route.path !== '/')

  return (
    <nav css={styles}>
      {routes.map((route) => (
        <Link key={route.path} to={route.path}>
          {route.name}
        </Link>
      ))}
    </nav>
  )
}

export default SiteFooterNavigation
