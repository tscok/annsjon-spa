import React, { useContext } from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'
import LanguageContext from '../site/LanguageContext'

const block = purebem.of('annual-meeting')

const Strangells = () => {
  const { language } = useContext(LanguageContext)

  if (language === 'en') {
    return null
  }

  return (
    <section className={block()}>
      <div className="container">
        <h6 className={block('header')}>Strangells Stiftelse</h6>
        <div className={block('main')}>
          <h5 className={block('title')}>Nya fågelholkar</h5>
          <p className={block('body')}>
            Många av våra fågelholkar börjar bli till åren och behöver bytas ut. För att kunna köpa
            in nya holkar till våra holkprojekt ansökte vi om bidrag från Strangells stiftelse och
            vår ansökan har nu beviljats!
          </p>
        </div>
        <div className={block('actions')}>
          <a href="#strangells" className="button button-primary">
            {getText('read-more')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Strangells
