import React from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'

const block = purebem.of('open-house')

const OpenHouse = () => (
  <section className={block()}>
    <div className="container">
      <h6 className={block('header')}>{getText('openhouse_header')}</h6>
      <div className={block('main')}>
        <h5 className={block('title')}>{getText('openhouse_title')}</h5>
        <p className={block('body')}>{getText('openhouse_body')}</p>
      </div>
      <div className={block('actions')}>
        <a href="#open-house" className="button button-primary">
          {getText('read-more')}
        </a>
      </div>
    </div>
  </section>
)

export default OpenHouse
