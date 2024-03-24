import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'

export const Emoji = ({
  children,
  fontSize = '1.5rem',
}: PropsWithChildren<{ fontSize?: string }>) => (
  <Box
    aria-label="icon"
    sx={{
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      fontSize,
    }}
  >
    {children}
  </Box>
)
