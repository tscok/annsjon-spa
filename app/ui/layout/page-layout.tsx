import { Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useRoutes } from 'app/utils/use-routes'
import { SideNav } from '../navigation/side-nav'
import { PageContainer } from './page-container'

export const PageLayout = () => {
  const { pathname } = useLocation()
  const [rootpath] = pathname.split('/').filter(Boolean)

  const route = useRoutes().find((route) => route.path === `/${rootpath}`)

  return (
    <PageContainer>
      <Box component="aside" sx={{ maxWidth: { xs: 150, lg: '100%' } }}>
        {route?.children && <SideNav pathname={pathname} route={route} />}
      </Box>
      <Box component="article">
        <Outlet />
      </Box>
    </PageContainer>
  )
}
