import { Link as RouterLink, useLocation } from 'react-router-dom'
import Button, { ButtonProps } from '@mui/material/Button'
import { useDictionary } from 'app/i18n/use-dictionary'

type VolunteerButtonProps = {
  disabled?: boolean
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
}

export const VolunteerButton = ({
  disabled,
  size,
  variant,
}: VolunteerButtonProps) => {
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
      disabled={disabled}
      disableElevation
      component={RouterLink}
      size={size}
      to="/volunteer/application"
      variant={variant}
    >
      {t('volunteer.info.button')}
    </Button>
  )
}
