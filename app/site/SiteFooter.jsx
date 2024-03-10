import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import Anchor from '../components/Anchor'
import Divider from '../components/Divider'
import PageContent from '../components/PageContent'

import {useLanguageContext} from './LanguageContext'
import Logotype from './Logotype'
import SiteFooterNavigation from './SiteFooterNavigation'
import { media } from './GlobalStyles'

import { MIKAEL } from '../utils/contacts'
import useText from '../utils/useText'

const styles = css`
  background-color: #444;
  padding: 60px 0;

  .layout {
    align-items: center;
    display: grid;
    gap: 20px;
    grid-template-rows: 60px 1fr;
    justify-content: center;
    justify-items: center;

    ${media.medium} {
      justify-content: space-between;
      grid-template-columns: auto 120px;
      grid-template-rows: auto;
    }
  }

  .content {
    color: rgba(255, 255, 255, 0.5);
    cursor: default;
    font-size: 12px;
    grid-row-start: 2;
    text-align: center;

    ${media.medium} {
      grid-row-start: auto;
      text-align: left;
    }
  }

  .language {
    margin-bottom: 10px;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  ${media.medium} {
    .language a:hover,
    .credits a:hover {
      text-decoration: underline;
    }
  }
`

const SiteFooter = () => {
  const { isEnglish, languages, setLanguage } = useLanguageContext()
  const getText = useText()

  return (
    <footer css={styles}>
      <PageContent>
        <div className="layout">
          <div className="content">
            <SiteFooterNavigation />
            <div className="language">
              {isEnglish ? (
                <Anchor label="Svenska" onClick={() => setLanguage(languages.SE)} />
              ) : (
                <Anchor label="English" onClick={() => setLanguage(languages.EN)} />
              )}
              <Divider color="white" vertical />
              <Link to="/cookies">Cookies</Link>
            </div>
            <div className="credits">
              {getText('credits')}{' '}
              <Anchor href="https://www.linkedin.com/in/mr-mike/" label={MIKAEL.name} />
            </div>
          </div>
          <Logotype white />
        </div>
      </PageContent>
    </footer>
  )
}

export default SiteFooter
