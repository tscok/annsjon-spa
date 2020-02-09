import React, { useState } from 'react'
import RiotControl from 'riotcontrol'
import purebem from 'purebem'

import getText from '../assets/js/data/mygettext'

const block = purebem.of('site-footer')

const SiteFooter = () => {
  const [links, setLinks] = useState([])
  const [language, setLanguage] = useState('')

  const changeLanguage = () => RiotControl.trigger('SET_SITE_LANGUAGE')

  RiotControl.on('SITE_NAVIGATION_FOOTER', setLinks)
  RiotControl.on('SITE_LANGUAGE', setLanguage)

  return (
    <footer className={block()}>
      <div className="container">
        <div className="row">
          <a href="#" className={block('logo')}>
            {getText('site_title')}
          </a>
          <nav className={block('links')}>
            {links.map(({ href, label }) => (
              <a key={href} className={block('link')} href={`#${href}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="row">
          <p className={block('misc')}>
            <a href="#" className={block('misc-link', ['separator'])} onClick={changeLanguage}>
              {getText('language')}
            </a>
            <a href="#cookies" className={block('misc-link')}>
              Cookies
            </a>
            <span className={block('credits')}>
              {getText('credits')}{' '}
              <a href="http://twitter.com/tscok" target="_blank" className={block('misc-link')}>
                Mikael Carlsson
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
