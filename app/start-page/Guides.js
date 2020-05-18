import React, { useContext } from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'
import LanguageContext from '../site/LanguageContext'

const block = purebem.of('guides')

const Guides = () => {
  const { language } = useContext(LanguageContext)

  return (
    <section className={block()}>
      <div className="container">
        <h6 className={block('header')}>{getText('guides_header')}</h6>
        <div className="row">
          <div className={`${block('brief')} one-half column`}>
            <h5 className={block('title')}>Högåsen</h5>
            <p className={block('body')}>
              {getText('guides_body-hogasen')}
              {language === 'se' && <a href="#guide/hogasen">{getText('read-more')}</a>}
            </p>
          </div>
          <div className={`${block('brief')} one-half column`}>
            <h5 className={block('title')}>Storulvån</h5>
            <p className={block('body')}>
              {getText('guides_body-storulvan')}
              {language === 'se' && <a href="#guide/storulvan">{getText('read-more')}</a>}
            </p>
          </div>
        </div>
        <div className="row">
          <div className={`${block('brief')} one-half column`}>
            <h5 className={block('title')}>Storlien</h5>
            <p className={block('body')}>
              {getText('guides_body-storlien')}
              {language === 'se' && <a href="#guide/storlien">{getText('read-more')}</a>}
            </p>
          </div>
          <div className={`${block('brief')} one-half column`}>
            <h5 className={block('title')}>Ånn</h5>
            <p className={block('body')}>
              {getText('guides_body-ann')}
              {language === 'se' && <a href="#guide/ann">{getText('read-more')}</a>}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guides
