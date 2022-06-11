import React, { useContext, useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import Page from '../components/Page'
import LanguageContext from '../site/LanguageContext'

import Ann from './guide/Ann'
import GuideNavigation from './guide/GuideNavigation'
import GuideOverview from './guide/GuideOverview'
import Handol from './guide/Handol'
import Hogasen from './guide/Hogasen'
import Storlien from './guide/Storlien'
import Storulvan from './guide/Storulvan'

const Guide = () => {
  const { isEnglish } = useContext(LanguageContext)
  const history = useHistory()

  // useEffect(() => {
  //   if (isEnglish) history.push('/')
  // })

  return (
    <Page>
      <GuideNavigation />
      <Switch>
        <Route component={GuideOverview} exact path="/guide" />
        <Route component={Ann} path="/guide/ann" />
        <Route component={Handol} path="/guide/handol" />
        <Route component={Hogasen} path="/guide/hogasen" />
        <Route component={Storlien} path="/guide/storlien" />
        <Route component={Storulvan} path="/guide/storulvan" />
        <Redirect to="/guide" />
      </Switch>
    </Page>
  )
}

export default Guide
