import Stack from '@mui/material/Stack'
import { useDictionary } from 'app/i18n/use-dictionary'
import { PageSection } from 'app/ui/layout/page-section'
import { BackgroundImage } from 'app/ui/image/background-image'
import { H5 } from 'app/ui/text/heading'
import { P } from 'app/ui/text/p'

export const Projects = () => {
  const t = useDictionary('startpage')

  return (
    <PageSection title={t('section-title.projects')}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
        <article>
          <div style={{ marginBottom: '30px' }}>
            <BackgroundImage
              height={150}
              src="/images/great-snipe_bjorn-isaksson.jpg"
            />
          </div>
          <H5>{t('great-snipe.title')}</H5>
          <P>{t('great-snipe.body')}</P>
        </article>
        <article>
          <div style={{ marginBottom: '30px' }}>
            <BackgroundImage
              height={150}
              src="/images/survey_malte-busch.jpg"
            />
          </div>
          <H5>{t('survey.title')}</H5>
          <P>{t('survey.body')}</P>
        </article>
        <article>
          <div style={{ marginBottom: '30px' }}>
            <BackgroundImage
              height={150}
              src="/images/ringing_mikael-carlsson.jpg"
            />
          </div>
          <H5>{t('ringing.title')}</H5>
          <P>{t('ringing.body')}</P>
        </article>
      </Stack>
    </PageSection>
  )
}