import { PropsWithChildren } from 'react'
import { Typography } from '../mui'

export const Blockquote = ({ children }: PropsWithChildren) => (
  <Typography
    component="blockquote"
    variant="body2"
    sx={{
      borderLeftColor: 'action.disabled',
      borderLeftStyle: 'solid',
      borderLeftWidth: 6,
      my: '1.25rem',
      pl: 3,
      pr: 6,
    }}
  >
    {children}
  </Typography>
)
