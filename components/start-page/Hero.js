import React from 'react'

import getText from '../../assets/js/data/mygettext'

const Hero = () => (
  <section className="hero">
    <div className="container">
      <h1 className="hero__title">{getText('site_title')}</h1>
      <hr className="hero__ruler" />
      <h5 className="hero__body">{getText('hero_body')}</h5>
    </div>
  </section>
)

export default Hero
