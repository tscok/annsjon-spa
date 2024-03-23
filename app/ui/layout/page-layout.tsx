import { Outlet, useLocation } from 'react-router-dom'
import { useRoutes } from 'app/utils/use-routes'
import { SideNav } from '../navigation/side-nav'
import { PageContainer } from './page-container'

export const PageLayout = () => {
  const { pathname } = useLocation()
  const [rootpath] = pathname.split('/').filter(Boolean)

  const route = useRoutes().find((route) => route.path === `/${rootpath}`)

  return (
    <PageContainer>
      <aside style={{ minWidth: 200 }}>
        {route?.children && <SideNav pathname={pathname} route={route} />}
      </aside>
      <article>
        <Outlet />
      </article>
    </PageContainer>
  )
}
