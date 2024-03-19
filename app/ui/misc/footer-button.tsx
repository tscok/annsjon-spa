import { Link as RouterLink } from 'react-router-dom'
import Button, { ButtonProps } from '@mui/material/Button'

export const FooterButton = (props: ButtonProps & { to?: string }) => (
  <Button
    {...props}
    {...(props.to && { component: RouterLink })}
    sx={{
      ...props.sx,
      color: 'common.white',
      minWidth: 0,
      textTransform: 'none',
    }}
    variant="text"
  />
)
