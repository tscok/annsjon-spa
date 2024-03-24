import Stack from '@mui/material/Stack'
import { useDictionary } from 'app/i18n/use-dictionary'
import { PageSection } from 'app/ui/layout/page-section'
import { MediaCard } from 'app/ui/misc/media-card'

export const Projects = () => {
  const t = useDictionary('startpage')

  return (
    <PageSection title={t('section-title.projects')}>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 2, sm: 4 }}>
        <MediaCard
          ariaLabel="project link"
          id="great-snipe-project"
          body={t('project.great-snipe.body')}
          media={{ src: '/images/great-snipe_bjorn-isaksson.jpg' }}
          title={t('project.great-snipe.title')}
          to="/projects"
        />
        <MediaCard
          ariaLabel="project link"
          id="survey-project"
          body={t('project.survey.body')}
          media={{ src: '/images/survey_malte-busch.jpg' }}
          title={t('project.survey.title')}
          to="/projects"
        />
        <MediaCard
          ariaLabel="project link"
          id="ringing-project"
          body={t('project.ringing.body')}
          media={{ src: '/images/ringing_mikael-carlsson.jpg' }}
          title={t('project.ringing.title')}
          to="/projects"
        />
      </Stack>
    </PageSection>
  )
}
