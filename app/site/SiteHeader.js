import React, { useEffect, useState } from 'react'
import { css } from '@emotion/core'
import { useLocation } from 'react-router-dom'

import Divider from '../components/Divider'
import Flex from '../components/Flex'
import PageContent from '../components/PageContent'

import LanguageButton from './LanguageButton'
import Logotype from './Logotype'
import SiteHeaderBurger from './SiteHeaderBurger'
import SiteHeaderNavItem from './SiteHeaderNavItem'
import useNavigation from './useNavigation'
import { media } from './GlobalStyles'

const header = css`
  background-color: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 1;

  .language-mobile,
  .language-desktop {
    align-items: center;
  }

  .language-mobile {
    display: flex;
  }

  .language-desktop {
    display: none;
  }

  ${media.medium} {
    .language-mobile {
      display: none;
    }

    .language-desktop {
      display: flex;
    }
  }
`

const layout = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${media.medium} {
    flex-direction: row;
  }
`

const topbar = css`
  align-items: center;
  display: flex;
  justify-content: space-between;

  ${media.medium} {
    flex: 1;
  }
`

const navbar = css`
  flex: 1;
  margin: 20px 0;

  ${media.medium} {
    display: flex;
    margin: 0;
  }
`

const SiteHeader = () => {
  const [isExpanded, setExpanded] = useState(false)
  const { pathname } = useLocation()
  const [items, filter] = useNavigation()

  useEffect(() => {
    setExpanded(false)
  }, [pathname])

  const headerHeight = css`
    height: ${isExpanded ? 'auto' : '80px'};
  `

  const navbarDisplay = css`
    display: ${isExpanded ? 'block' : 'none'};
  `

  const isActive = (route) => {
    return pathname.slice(1).split('/')[0] === route.slice(1)
  }

  return (
    <header css={[header, headerHeight]}>
      <PageContent>
        <div css={layout}>
          <div css={topbar}>
            <Logotype />
            <Flex alignItems="center">
              <div className="language-mobile">
                <LanguageButton />
                <Divider color="gray" vertical />
              </div>
              <SiteHeaderBurger isExpanded={isExpanded} onClick={() => setExpanded(!isExpanded)} />
            </Flex>
          </div>
          <Flex alignItems="center">
            <nav css={[navbar, navbarDisplay]}>
              {items.filter(filter).map(({ label, route }) => (
                <SiteHeaderNavItem key={route} route={route} isActive={isActive(route)}>
                  {label}
                </SiteHeaderNavItem>
              ))}
            </nav>
            <div className="language-desktop">
              <Divider color="gray" vertical />
              <LanguageButton />
            </div>
          </Flex>
        </div>
      </PageContent>
    </header>
  )
}

export default SiteHeader
