import { Fragment } from 'react'

import Hero from './home/Hero'
import Events from './home/Events'
import Guides from './home/Guides'
import Location from './home/Location'
import Projects from './home/Projects'

export const StartPage = () => (
  <Fragment>
    <Hero />
    <Events />
    <Guides />
    <Projects />
    <Location />
  </Fragment>
)
