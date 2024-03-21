import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'

export const PageContainer = ({ children }: PropsWithChildren) => (
  <Box
    sx={{
      display: { xs: 'block', md: 'grid' },
      gap: 6,
      gridTemplateColumns: '1fr 640px 1fr',
      px: { xs: '1rem', sm: '3rem', md: 0 },
      pt: 6,
      pb: 12,
    }}
  >
    {children}
  </Box>
)
