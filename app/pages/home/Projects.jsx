import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import Figure from '../../components/Figure'
import Heading from '../../components/Heading'
import Background from '../../components/Background'
import PageSection from '../../components/PageSection'

import imageGreatSnipe from '../../../assets/images/old/projects_great-snipe.jpg'
import imageCensus from '../../../assets/images/old/projects_census.jpg'
import imageRinging from '../../../assets/images/old/projects_ringing.jpg'

import { media } from '../../site/GlobalStyles'
import { useTranslation } from '../../i18n'

const grid = css`
  display: grid;
  gap: 40px;
  grid-template-rows: repeat(3, 1fr);
  ${media.small} {
    grid-template-rows: none;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Projects = () => {
  const t = useTranslation('startpage')

  return (
    <PageSection styles={{ backgroundColor: '#f5f5f5' }} title={t('title.projects')}>
      <div css={grid}>
        <article>
          <Figure>
            <Background height="150px" position="50% 50%" source={imageGreatSnipe} />
          </Figure>
          <Heading level="h5">{t('great-snipe.title')}</Heading>
          <p>{t('great-snipe.body')}</p>
        </article>
        <article>
          <Figure>
            <Background height="150px" position="50% 50%" source={imageCensus} />
          </Figure>
          <Heading level="h5">{t('survey.title')}</Heading>
          <p>{t('survey.body')}</p>
        </article>
        <article>
          <Figure>
            <Background height="150px" position="50% 50%" source={imageRinging} />
          </Figure>
          <Heading level="h5">{t('ringing.title')}</Heading>
          <p>{t('ringing.body')}</p>
        </article>
      </div>
    </PageSection>
  )
}
