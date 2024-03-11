import { Outlet, useLocation } from 'react-router-dom'

import Page from '../components/Page'
import { Sidenav } from '../ui/sidenav'
import { useRoutes } from '../utils/use-routes'

export const PageLayout = () => {
  const { pathname } = useLocation()
  const [rootpath] = pathname.split('/').filter(Boolean)

  const route = useRoutes().find((route) => route.path === `/${rootpath}`)

  return (
    <Page>
      {route?.children && (
        <aside>
          <Sidenav route={route} />
        </aside>
      )}
      <article>
        <Outlet />
      </article>
    </Page>
  )
}
