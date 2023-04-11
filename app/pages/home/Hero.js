import React from 'react'
import { css } from '@emotion/core'

import PageSection from '../../components/PageSection'

import { media } from '../../site/GlobalStyles'
import useText from '../../utils/useText'

const copy = css`
  h1 {
    font-family: sans-serif;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 16px;
    letter-spacing: initial;
    line-height: 1;
    text-align: center;

    ${media.small} {
      font-size: 52px;
    }

    ${media.medium} {
      font-size: 64px;
    }
  }
  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 0;
    text-align: center;

    ${media.small} {
      font-size: 24px;
    }

    ${media.medium} {
      font-size: 28px;
    }
  }

  ${media.medium} {
    grid-column-start: 2;
  }
`

const section = css`
  background-size: auto;
  background-position: 38% 18%;
  background-repeat: no-repeat;
  padding: 60px 0 40px;
  transition: all 250ms;

  ${media.small} {
    background-position: 36% 20%;
  }

  ${media.medium} {
    background-position: 40% 17%;
    background-repeat: no-repeat;
    padding: 100px 0 80px;
  }
`

const Hero = () => {
  const getText = useText()

  return (
    <PageSection styles={section}>
      <div css={copy}>
        <h1>
          {getText('hero_title_part1')}
          {' '}
          {getText('hero_title_part2')}
        </h1>
        <h2>{getText('hero_body')}</h2>
      </div>
    </PageSection>
  )
}

export default Hero
