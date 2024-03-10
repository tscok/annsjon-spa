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
import { useTranslation } from '../../i18n'

export const Guides = () => {
  const t = useTranslation('startpage')

  return (
    <PageSection title={t('title.guide')}>
      <Grid columns="repeat(2, 1fr)" rows="repeat(2, 1fr)">
        <article>
          <Figure>
            <Background
              height="200px"
              position="50% 70%"
              source={imagehHogasen}
            />
          </Figure>
          <Heading level="h5">Högåsen</Heading>
          <p>
            {t('hogasen.body')}{' '}
            <Link to="/guide/hogasen">{t('read-more')}</Link>
          </p>
        </article>
        <article>
          <Figure>
            <Background
              height="200px"
              position="50% 30%"
              source={imageStorulvan}
            />
          </Figure>
          <Heading level="h5">Storulvån</Heading>
          <p>
            {t('storulvan.body')}{' '}
            <Link to="/guide/storulvan">{t('read-more')}</Link>
          </p>
        </article>
        <article>
          <Figure>
            <Background
              height="200px"
              position="50% 10%"
              source={imageHandol}
            />
          </Figure>
          <Heading level="h5">Handöl</Heading>
          <p>
            {t('handol.body')} <Link to="/guide/handol">{t('read-more')}</Link>
          </p>
        </article>
        <article>
          <Figure>
            <Background height="200px" source={imageAnn} />
          </Figure>
          <Heading level="h5">Ånn</Heading>
          <p>
            {t('ann.body')} <Link to="/guide/ann">{t('read-more')}</Link>
          </p>
        </article>
      </Grid>
    </PageSection>
  )
}
