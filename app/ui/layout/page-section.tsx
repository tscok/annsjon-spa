import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import { alpha } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { theme } from '../theme/theme'

export const PageSection = ({
  bgColor,
  children,
  title,
}: PropsWithChildren<{
  bgColor?: 'dark' | 'light'
  title?: string
}>) => {
  let backgroundColor = 'transparent'

  if (bgColor === 'dark') {
    backgroundColor = 'primary.dark'
  }

  if (bgColor === 'light') {
    backgroundColor = alpha(theme.palette.primary.main, 0.05)
  }

  return (
    <Box sx={{ backgroundColor, pt: 6, pb: 6 }}>
      {title && (
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h6">{title}</Typography>
        </Box>
      )}
      <Box sx={{ px: 3 }}>{children}</Box>
    </Box>
  )
}
