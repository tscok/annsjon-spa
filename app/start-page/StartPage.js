import React from 'react'

import Guides from './Guides'
import Hero from './Hero'
import Location from './Location'
import Projects from './Projects'
import Strangells from './Strangells'

const StartPage = ({ language }) => {
  return (
    <main>
      <Hero />
      {language === 'se' && <Strangells />}
      <Projects language={language} />
      <Guides language={language} />
      <Location />
    </main>
  )
}

export default StartPage
