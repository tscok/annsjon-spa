import { PropsWithChildren } from 'react'
import Typography from '@mui/material/Typography'

export const Span = ({
  children,
  small,
}: PropsWithChildren<{ small?: boolean }>) => {
  return (
    <Typography component="span" variant={small ? 'body2' : 'body1'}>
      {children}
    </Typography>
  )
}
