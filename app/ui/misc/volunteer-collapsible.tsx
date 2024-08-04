import { useDictionary } from 'app/i18n/use-dictionary'
import { Collapsible, CollapsibleProps } from './collapsible'
import { VolunteerButton } from './volunteer-button'

export const VolunteerCollapsible = ({ title, ...props }: CollapsibleProps) => {
  const t = useDictionary('pages')
  return (
    <Collapsible
      {...props}
      action={<VolunteerButton size="small" variant="contained" />}
      title={title ?? t('volunteer.info.title')}
    />
  )
}
