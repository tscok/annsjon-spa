import { PropsWithChildren } from 'react'
import { Box, Typography } from '../mui'

export const PageSection = ({
  children,
  color,
  title,
}: PropsWithChildren<{
  color?: string | boolean
  title?: string
}>) => {
  let backgroundColor = 'transparent'

  if (typeof color === 'boolean') {
    backgroundColor = 'rgba(243, 246, 249, 0.6)'
  }

  if (typeof color === 'string') {
    backgroundColor = color
  }
  return (
    <Box
      sx={{
        backgroundColor,
        pt: 6,
        pb: 6,
      }}
    >
      {title && (
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography variant="h6">{title}</Typography>
        </Box>
      )}
      <Box sx={{ px: 3 }}>{children}</Box>
    </Box>
  )
}
