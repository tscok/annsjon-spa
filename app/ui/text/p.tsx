import { PropsWithChildren } from 'react'
import { Typography } from '../mui'

type Variant = 'body1' | 'body2'

export const P = ({
  children,
  variant,
}: PropsWithChildren<{ variant?: Variant }>) => (
  <Typography variant={variant} sx={{ my: '1.25rem' }}>
    {children}
  </Typography>
)
