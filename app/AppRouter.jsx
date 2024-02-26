import React, { Fragment, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import About from './pages/About'
import Contact from './pages/Contact'
import Cookies from './pages/Cookies'
import Fagelskydd from './pages/Fagelskydd'
import Guide from './pages/Guide'
import Home from './pages/Home'
import OpenHouse from './pages/OpenHouse'
import PageNotFound from './pages/PageNotFound'
import Projects from './pages/Projects'
import Reports from './pages/Reports'
import Sponsors from './pages/Sponsors'
import Volunteer from './pages/Volunteer'

import usePrevious from './utils/usePrevious'

// const gaTracking = (pathname) => {
//   const page = pathname === '/' ? 'index' : pathname
//   if (window.ga) {
//     window.ga('set', 'page', page)
//     window.ga('send', 'pageview')
//   }
// }

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

const AppRouter = (props) => (
  <Fragment>
    <ScrollToTop />
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={About} path="/about" />
      <Route component={Contact} path="/contact" />
      <Route component={Cookies} path="/cookies" />
      <Route component={Fagelskydd} path="/fagelskydd" />
      <Route component={Guide} path="/guide" />
      <Route component={OpenHouse} path="/open-house" />
      <Route component={Projects} path="/projects/:page?" />
      <Route component={Reports} path="/reports" />
      <Route component={Sponsors} path="/sponsors" />
      <Route component={Volunteer} path="/volunteer/:page?" />
      <Route component={PageNotFound} />
    </Switch>
  </Fragment>
)

export default AppRouter
