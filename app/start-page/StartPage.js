import React from 'react'

import Guides from './Guides'
import Hero from './Hero'
import Location from './Location'
import Projects from './Projects'
import Strangells from './Strangells'

const StartPage = () => (
  <main>
    <Hero />
    <Strangells />
    <Projects />
    <Guides />
    <Location />
  </main>
)

export default StartPage
