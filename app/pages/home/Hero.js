import React from 'react'
import { css } from '@emotion/core'

import Divider from '../../components/Divider'
import Heading from '../../components/Heading'
import PageSection from '../../components/PageSection'

import { media } from '../../site/GlobalStyles'
import useText from '../../utils/useText'

const copy = css`
  h1 {
    font-family: sans-serif;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
    letter-spacing: initial;
    line-height: 1;
    color: #fff;

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

const layout = css`
  display: grid;
  gap: 40px;
  grid-template-columns: 80% 1fr;

  ${media.small} {
    grid-template-columns: 70% 1fr;
  }

  ${media.medium} {
    grid-template-columns: 5% 60% 1fr;
  }
`

const section = css`
  background-color: lightsteelblue;
  // background-image: url('/app/assets/IMG_20171007_141541.jpg');
  background-size: auto;
  background-position: 38% 18%;
  background-repeat: no-repeat;
  padding: 100px 0 60px;
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
      <div css={layout}>
        <div css={copy}>
          <h1>
            {getText('hero_title_part1')}
            <br />
            {getText('hero_title_part2')}
          </h1>
          <h2>{getText('hero_body')}</h2>
        </div>
      </div>
    </PageSection>
  )
}

export default Hero
