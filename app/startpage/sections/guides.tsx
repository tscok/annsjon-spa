import { useTranslation } from 'app/i18n'
import { A, BackgroundImage, H5, P, PageSection } from 'app/ui'
import { Grid } from 'app/ui/mui'

export const Guides = () => {
  const t = useTranslation('startpage')

  return (
    <PageSection color title={t('section-title.guides')}>
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
          <P>
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
          <P>
            {t('storulvan.body')}{' '}
            <A href="/guide/storulvan">{t('read-more')}</A>
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
          <P>
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
          <P>
            {t('ann.body')} <A href="/guide/ann">{t('read-more')}</A>
          </P>
        </Grid>
      </Grid>
    </PageSection>
  )
}
