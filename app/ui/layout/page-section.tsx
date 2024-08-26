import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import { alpha, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

export const PageSection = ({
  bgColor,
  children,
  title,
}: PropsWithChildren<{
  bgColor?: 'dark' | 'light'
  title?: string
}>) => {
  const backgroundColor = (theme: Theme) => {
    if (bgColor === 'light') return alpha(theme.palette.primary.main, 0.05)
    if (bgColor === 'dark') return 'info.main'
    return 'transparent'
  }

  return (
    <Box sx={{ backgroundColor, py: 4 }}>
      {title && (
        <Typography
          component="h2"
          sx={{ mb: 4, textAlign: 'center' }}
          variant="h6"
        >
          {title}
        </Typography>
      )}
      <Box sx={{ px: 3 }}>{children}</Box>
    </Box>
  )
}
