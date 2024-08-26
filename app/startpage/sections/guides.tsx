import { useDictionary } from 'app/i18n/use-dictionary'
import { PageSection } from 'app/ui/layout/page-section'
import { GuidesGrid } from 'app/ui/misc/guides-grid'

export const Guides = () => {
  const t = useDictionary('startpage')

  return (
    <PageSection title={t('section-title.guides')}>
      <GuidesGrid exclude="storlien" />
    </PageSection>
  )
}
