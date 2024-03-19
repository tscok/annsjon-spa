import { Outlet, useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import { SideNav } from '../navigation/side-nav'
import { useRoutes } from 'app/utils/use-routes'

export const PageLayout = () => {
  const { pathname } = useLocation()
  const [rootpath] = pathname.split('/').filter(Boolean)

  const route = useRoutes().find((route) => route.path === `/${rootpath}`)

  return (
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
      <aside>
        {route?.children && <SideNav pathname={pathname} route={route} />}
      </aside>
      <article>
        <Outlet />
      </article>
    </Box>
  )
}
