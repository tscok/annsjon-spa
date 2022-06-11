import React, { useContext } from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

import Figure from '../../components/Figure'
import Heading from '../../components/Heading'
import Background from '../../components/Background'
import PageSection from '../../components/PageSection'

import LanguageContext from '../../site/LanguageContext'
import useText from '../../utils/useText'

import imageGreatSnipe from '../../../assets/images/old/projects_great-snipe.jpg'
import imageCensus from '../../../assets/images/old/projects_census.jpg'
import imageRinging from '../../../assets/images/old/projects_ringing.jpg'

import { media } from '../../site/GlobalStyles'

const grid = css`
  display: grid;
  gap: 40px;
  grid-template-rows: repeat(3, 1fr);
  ${media.small} {
    grid-template-rows: none;
    grid-template-columns: repeat(3, 1fr);
  }
`

const Projects = () => {
  const getText = useText()
  const { isEnglish } = useContext(LanguageContext)

  return (
    <PageSection styles={{ backgroundColor: '#f5f5f5' }} title={getText('projects_header')}>
      <div css={grid}>
        <article>
          <Figure>
            <Background height="150px" position="50% 50%" source={imageGreatSnipe} />
          </Figure>
          <Heading level="h5">{getText('projects_title-great-snipe')}</Heading>
          <p>{getText('projects_body-great-snipe')}</p>
        </article>
        <article>
          <Figure>
            <Background height="150px" position="50% 50%" source={imageCensus} />
          </Figure>
          <Heading level="h5">{getText('projects_title-census')}</Heading>
          <p>{getText('projects_body-census')}</p>
        </article>
        <article>
          <Figure>
            <Background height="150px" position="50% 50%" source={imageRinging} />
          </Figure>
          <Heading level="h5">{getText('projects_title-ringing')}</Heading>
          <p>{getText('projects_body-ringing')}</p>
        </article>
      </div>
      {/*!isEnglish && <Link to="/projects">{getText('projects_button')}</Link>*/}
    </PageSection>
  )
}

export default Projects
