import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import Background from '../../components/Background'
import Figure from '../../components/Figure'
import Grid from '../../components/Grid'
import Heading from '../../components/Heading'
import PageSection from '../../components/PageSection'

import imagehHogasen from '../../../assets/images/dbeckasin3_steve-dahlfors.jpg'
import imageStorulvan from '../../../assets/images/blahake_steve-dahlfors.jpg'
import imageHandol from '../../../assets/images/bergfink_steve-dahlfors.jpg'
import imageAnn from '../../../assets/images/brushane_steve-dahlfors.jpg'

import LanguageContext from '../../site/LanguageContext'
import useText from '../../utils/useText'

const Guides = () => {
  const { isEnglish } = useContext(LanguageContext)
  const getText = useText()

  return (
    <PageSection title={getText('guides_header')}>
      <Grid columns="repeat(2, 1fr)" rows="repeat(2, 1fr)">
        <article>
          <Figure>
            <Background height="200px" position="50% 70%" source={imagehHogasen} />
          </Figure>
          <Heading level="h5">Högåsen</Heading>
          <p>
            {getText('guides_body-hogasen')} <Link to="/guide/hogasen">{getText('read-more')}</Link>
          </p>
        </article>
        <article>
          <Figure>
            <Background height="200px" position="50% 30%" source={imageStorulvan} />
          </Figure>
          <Heading level="h5">Storulvån</Heading>
          <p>
            {getText('guides_body-storulvan')}{' '}
            <Link to="/guide/storulvan">{getText('read-more')}</Link>
          </p>
        </article>
        <article>
          <Figure>
            <Background height="200px" position="50% 10%" source={imageHandol} />
          </Figure>
          <Heading level="h5">Handöl</Heading>
          <p>
            {getText('guides_body-handol')} <Link to="/guide/handol">{getText('read-more')}</Link>
          </p>
        </article>
        <article>
          <Figure>
            <Background height="200px" source={imageAnn} />
          </Figure>
          <Heading level="h5">Ånn</Heading>
          <p>
            {getText('guides_body-ann')} <Link to="/guide/ann">{getText('read-more')}</Link>
          </p>
        </article>
      </Grid>
    </PageSection>
  )
}

export default Guides
