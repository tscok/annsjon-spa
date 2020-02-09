import React from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'

const block = purebem.of('hero')

const Hero = () => (
  <section className={block()}>
    <div className="container">
      <h1 className={block('title')}>{getText('site_title')}</h1>
      <hr className={block('ruler')} />
      <h5 className={block('body')}>{getText('hero_body')}</h5>
    </div>
  </section>
)

export default Hero
