import { Fragment, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { Page, StartPage } from './pages'

import usePrevious from './utils/usePrevious'
import Application from './pages/volunteer/Application'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const prevPathname = usePrevious(pathname)
  useEffect(() => {
    if (pathname !== prevPathname || pathname === '/') {
      window.scrollTo(0, 0)
    }
  })
  return null
}

const AppRouter = () => (
  <Fragment>
    <ScrollToTop />
    <Switch>
      <Route exact path="/">
        <StartPage />
      </Route>
      <Route path="/volunteer/application">
        <Application />
      </Route>
      <Route path="/*">
        <Page />
      </Route>
    </Switch>
  </Fragment>
)

export default AppRouter
