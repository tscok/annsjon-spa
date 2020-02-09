import React from 'react'

import Guides from './Guides'
import Hero from './Hero'
import Location from './Location'
import Projects from './Projects'

const StartPage = ({ language }) => {
  return (
    <main>
      <Hero />
      <Projects language={language} />
      <Guides language={language} />
      <Location />
    </main>
  )
}

export default StartPage
