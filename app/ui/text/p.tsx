import { PropsWithChildren } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

type Variant = Extract<TypographyProps['variant'], 'body1' | 'body2'>

export const P = ({
  children,
  variant = 'body1',
}: PropsWithChildren<{ variant?: Variant }>) => (
  <Typography variant={variant} sx={{ my: '1.25rem' }}>
    {children}
  </Typography>
)
