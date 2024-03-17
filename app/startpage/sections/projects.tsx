import imageGreatSnipe from '../../../assets/images/old/projects_great-snipe.jpg'
import imageCensus from '../../../assets/images/old/projects_census.jpg'
import imageRinging from '../../../assets/images/old/projects_ringing.jpg'

import { useTranslation } from 'app/i18n'
import { BackgroundImage, H5, P, PageSection } from 'app/ui'
import { Stack } from 'app/ui/mui'

export const Projects = () => {
  const t = useTranslation('startpage')

  return (
    <PageSection title={t('section-title.projects')}>
      <Stack direction={{ sm: 'row' }} spacing={4}>
        <article>
          <div style={{ marginBottom: '30px' }}>
            <BackgroundImage height={150} src={imageGreatSnipe} />
          </div>
          <H5>{t('great-snipe.title')}</H5>
          <P>{t('great-snipe.body')}</P>
        </article>
        <article>
          <div style={{ marginBottom: '30px' }}>
            <BackgroundImage height={150} src={imageCensus} />
          </div>
          <H5>{t('survey.title')}</H5>
          <P>{t('survey.body')}</P>
        </article>
        <article>
          <div style={{ marginBottom: '30px' }}>
            <BackgroundImage height={150} src={imageRinging} />
          </div>
          <H5>{t('ringing.title')}</H5>
          <P>{t('ringing.body')}</P>
        </article>
      </Stack>
    </PageSection>
  )
}
