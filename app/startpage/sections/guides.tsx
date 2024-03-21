import Grid from '@mui/material/Unstable_Grid2'
import { useDictionary } from 'app/i18n/use-dictionary'
import { PageSection } from 'app/ui/layout/page-section'
import { A } from 'app/ui/text/a'
import { BackgroundImage } from 'app/ui/image/background-image'
import { H5 } from 'app/ui/text/heading'
import { P } from 'app/ui/text/p'
import { useLocation } from 'react-router-dom'

export const GuidesGrid = () => {
  const t = useDictionary('startpage')
  const { pathname } = useLocation()
  const isHomepage = pathname === '/'
  const variant = isHomepage ? 'body1' : 'body2'

  return (
    <Grid container columnSpacing={4} rowSpacing={3}>
      <Grid sm={6}>
        <div style={{ marginBottom: '30px' }}>
          <BackgroundImage
            height={200}
            position="50% 70%"
            src="/images/dbeckasin3_steve-dahlfors.jpg"
          />
        </div>
        <H5>Högåsen</H5>
        <P variant={variant}>
          {t('hogasen.body')} <A href="/guide/hogasen">{t('read-more')}</A>
        </P>
      </Grid>
      <Grid sm={6}>
        <div style={{ marginBottom: '30px' }}>
          <BackgroundImage
            height={200}
            position="50% 30%"
            src="/images/blahake_steve-dahlfors.jpg"
          />
        </div>
        <H5>Storulvån</H5>
        <P variant={variant}>
          {t('storulvan.body')} <A href="/guide/storulvan">{t('read-more')}</A>
        </P>
      </Grid>
      <Grid sm={6}>
        <div style={{ marginBottom: '30px' }}>
          <BackgroundImage
            height={200}
            position="50% 10%"
            src="/images/bergfink_steve-dahlfors.jpg"
          />
        </div>
        <H5>Handöl</H5>
        <P variant={variant}>
          {t('handol.body')} <A href="/guide/handol">{t('read-more')}</A>
        </P>
      </Grid>
      <Grid sm={6}>
        <div style={{ marginBottom: '30px' }}>
          <BackgroundImage
            height={200}
            src="/images/brushane_steve-dahlfors.jpg"
          />
        </div>
        <H5>Ånn</H5>
        <P variant={variant}>
          {t('ann.body')} <A href="/guide/ann">{t('read-more')}</A>
        </P>
      </Grid>
      {!isHomepage && (
        <Grid sm={6}>
          <div style={{ marginBottom: '30px' }}>
            <BackgroundImage
              height={200}
              src="/images/dbeckasin_steve-dahlfors.jpg"
            />
          </div>
          <H5>Storlien</H5>
          <P variant={variant}>
            {t('storlien.body')} <A href="/guide/storlien">{t('read-more')}</A>
          </P>
        </Grid>
      )}
    </Grid>
  )
}

export const Guides = () => {
  const t = useDictionary('startpage')

  return (
    <PageSection color title={t('section-title.guides')}>
      <GuidesGrid />
    </PageSection>
  )
}
