import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const Figure = ({
  caption,
  children,
}: PropsWithChildren<{ caption: string }>) => (
  <Box component="figure" sx={{ my: 3, mx: 0 }}>
    {children}
    <Typography component="figcaption" variant="caption">
      {caption}
    </Typography>
  </Box>
)
