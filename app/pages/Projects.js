import React, { useContext, useEffect } from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'

import Page from '../components/Page'

import LanguageContext from '../site/LanguageContext'
import GreatSnipe from './projects/GreatSnipe'
import GreatSnipeBackground from './projects/GreatSnipeBackground'
import GreatSnipeResult2009 from './projects/GreatSnipeResult2009'
import GreatSnipeResult2008 from './projects/GreatSnipeResult2008'
import GreatSnipeResult2007 from './projects/GreatSnipeResult2007'
import GreatSnipeResult2006 from './projects/GreatSnipeResult2006'
import GreatSnipeResult2005 from './projects/GreatSnipeResult2005'
import GreatSnipeResult2004 from './projects/GreatSnipeResult2004'
import Overview from './projects/Overview'

const Projects = () => {
  const { isEnglish } = useContext(LanguageContext)
  const history = useHistory()

  useEffect(() => {
    if (isEnglish) history.push('/')
  })

  return (
    <Page>
      <Switch>
        <Route component={Overview} exact path="/projects" />
        <Route component={GreatSnipeBackground} path="/projects/great-snipe/background" />
        <Route component={GreatSnipeResult2009} path="/projects/great-snipe/2009" />
        <Route component={GreatSnipeResult2008} path="/projects/great-snipe/2008" />
        <Route component={GreatSnipeResult2007} path="/projects/great-snipe/2007" />
        <Route component={GreatSnipeResult2006} path="/projects/great-snipe/2006" />
        <Route component={GreatSnipeResult2005} path="/projects/great-snipe/2005" />
        <Route component={GreatSnipeResult2004} path="/projects/great-snipe/2004" />
        <Route component={GreatSnipe} path="/projects/great-snipe" />
        <Redirect to="/projects" />
      </Switch>
    </Page>
  )
}

export default Projects
