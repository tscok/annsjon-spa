import { Outlet, useLocation } from 'react-router-dom'
import { useRoutes } from '../../utils'
import { SideNav } from '../navigation'
import { Box } from '../mui'

export const PageLayout = () => {
  const { pathname } = useLocation()
  const [rootpath] = pathname.split('/').filter(Boolean)

  const route = useRoutes().find((route) => route.path === `/${rootpath}`)

  return (
    <Box
      sx={{
        pt: 6,
        pb: 12,
        mx: 2,
        display: { md: 'grid' },
        gap: 5,
        gridTemplateColumns: '1fr 640px 1fr',
      }}
    >
      <Box component="aside">
        {route?.children && <SideNav pathname={pathname} route={route} />}
      </Box>
      <Box component="article">
        <Outlet />
      </Box>
      <Box component="aside"></Box>
    </Box>
  )
}
