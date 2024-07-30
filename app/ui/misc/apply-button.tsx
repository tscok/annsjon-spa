import { Link as RouterLink, useLocation } from 'react-router-dom'
import Button from '@mui/material/Button'
import { useDictionary } from 'app/i18n/use-dictionary'

export const ApplyButton = () => {
  const t = useDictionary('pages')
  const location = useLocation()

  const params = new URLSearchParams()
  const parts = location.pathname.split('/')

  if (parts.includes('projects')) {
    params.append('p', parts.pop() as string)
  }

  // TODO: Append params to get current project in query
  return (
    <Button
      component={RouterLink}
      to="/volunteer/application"
      variant="outlined"
      sx={{ mb: 4 }}
    >
      {t('volunteer.apply')}
    </Button>
  )
}
