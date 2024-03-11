import { Outlet } from 'react-router-dom'

import SiteFooter from './site/SiteFooter'
import SiteHeader from './site/SiteHeader'

export const RootLayout = () => (
  <>
    <SiteHeader />
    <main>
      <Outlet />
    </main>
    <SiteFooter />
  </>
)
