import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import Anchor from '../../components/Anchor'
import Heading from '../../components/Heading'
import PageSection from '../../components/PageSection'

import LocationMap from './LocationMap'

import useText from '../../utils/useText'
import { media } from '../../site/GlobalStyles'

const mapContainer = css`
  margin-bottom: 30px;
  position: relative;

  ${media.small} {
    grid-column-start: 1;
    margin-bottom: 0;
  }

  ${media.medium} {
    grid-column-start: 2;
  }
`

const mapOverlay = css`
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

const columns = css`
  display: flex;
  flex-direction: column;

  ${media.small} {
    display: grid;
    gap: 40px;
    grid-template-columns: 300px 1fr;
  }

  ${media.medium} {
    grid-template-columns: 100px 300px 1fr 100px;
  }
`

const article = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Location = () => {
  const getText = useText()

  return (
    <PageSection>
      <div css={columns}>
        <div css={mapContainer}>
          <LocationMap />
          <div css={mapOverlay} />
        </div>
        <article css={article}>
          <Heading level="h5">{getText('location_title')}</Heading>
          <p>
            {getText('location_body')}
            <Link to="/volunteer/information">FAQ</Link>
          </p>
          <p>
            {getText('location_link')}
            <Anchor
              href="https://www.google.se/maps/place/63%C2%B015'30.5%22N+12%C2%B026'51.0%22E/@60.3825553,1.0879701,4.66z/data=!4m2!3m1!1s0x0:0x0"
              label="Google Maps"
            />
          </p>
        </article>
      </div>
    </PageSection>
  )
}
