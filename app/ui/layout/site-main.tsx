import { PropsWithChildren } from 'react'
import Box from '@mui/material/Stack'

export const SiteMain = ({ children }: PropsWithChildren) => {
  // TODO: useMediaQuery to toggle between 64 and 48
  const siteHeaderHeight = '64px'
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        backgroundColor: 'background.paper',
        minHeight: `calc(100vh - ${siteHeaderHeight})`,
      }}
    >
      {children}
    </Box>
  )
}
