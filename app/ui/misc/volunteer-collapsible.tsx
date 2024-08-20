import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'
import { useDictionary } from 'app/i18n/use-dictionary'
import { Collapsible, CollapsibleProps } from './collapsible'
import { ProjectName } from 'app/types'

type VolunteerCollapsibleProps = CollapsibleProps & {
  id: ProjectName
}

export const VolunteerCollapsible = ({
  id,
  title,
  ...props
}: VolunteerCollapsibleProps) => {
  const t = useDictionary('pages')
  return (
    <Collapsible
      {...props}
      action={
        <Button
          component={RouterLink}
          disableElevation
          size="small"
          to={`/volunteer/application?${id}`}
          variant="contained"
        >
          {t('volunteer.info.button')}
        </Button>
      }
      title={title ?? t('volunteer.info.title')}
    />
  )
}
