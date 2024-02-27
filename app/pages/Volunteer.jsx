import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Page from '../components/Page'

import Application from './volunteer/Application'
import Information from './volunteer/Information'
import Mountainfit from './volunteer/Mountainfit'
import Overview from './volunteer/Overview'

const Volunteer = () => (
  <Page>
    <Switch>
      <Route component={Overview} exact path="/volunteer" />
      <Route component={Application} path="/volunteer/application" />
      <Route component={Information} path="/volunteer/information" />
      <Route component={Mountainfit} path="/volunteer/mountainfit" />
      <Redirect to="/volunteer" />
    </Switch>
  </Page>
)

export default Volunteer
