import React from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'

const block = purebem.of('annual-meeting')

const AnnualMeeting = () => (
  <section className={block()}>
    <div className="container">
      <h6 className={block('header')}>{getText('annual-meeting_header')}</h6>
      <div className={block('main')}>
        <h5 className={block('title')}>{getText('annual-meeting_title')}</h5>
        <p className={block('body')}>{getText('annual-meeting_body')}</p>
      </div>
    </div>
  </section>
)

export default AnnualMeeting
