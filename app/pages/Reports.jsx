import React, { useContext, useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import Page from '../components/Page'
import LanguageContext from '../site/LanguageContext'

import PressRelease from './reports/PressRelease'
import Overview from './reports/Overview'

const Reports = () => {
  const { isEnglish } = useContext(LanguageContext)
  const history = useHistory()

  useEffect(() => {
    if (isEnglish) history.push('/')
  })

  return (
    <Page>
      <Switch>
        <Route component={Overview} exact path="/reports" />
        <Route
          component={PressRelease}
          path="/reports/jamtlandsk-fagel-flyger-till-afrika-utan-vila"
        />
        <Redirect to="/reports" />
      </Switch>
    </Page>
  )
}

export default Reports
