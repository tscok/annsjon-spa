import { useDictionary } from 'app/i18n/use-dictionary'
import { PageSection } from 'app/ui/layout/page-section'
import { ProjectsGrid } from 'app/ui/misc/projects-grid'

export const Projects = () => {
  const t = useDictionary('startpage')

  return (
    <PageSection bgColor="light" title={t('section-title.projects')}>
      <ProjectsGrid columns={3} />
    </PageSection>
  )
}
