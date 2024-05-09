import { PropsWithChildren } from 'react'
import Box from '@mui/material/Stack'

export const SiteMain = ({ children }: PropsWithChildren) => (
  <Box
    component="main"
    sx={{
      flex: 1,
      backgroundColor: 'background.paper',
      minHeight: (theme) => `calc(100vh - ${theme.mixins.toolbar.minHeight}px)`,
    }}
  >
    {children}
  </Box>
)
