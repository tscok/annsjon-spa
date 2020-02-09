import React from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'

const block = purebem.of('annual-meeting')

const AnnualMeeting = () => (
  <section class={block()}>
    <div class="container">
      <h6 class={block('header')}>{getText('annual-meeting_header')}</h6>
      <div class={block('main')}>
        <h5 class={block('title')}>{getText('annual-meeting_title')}</h5>
        <p class={block('body')}>{getText('annual-meeting_body')}</p>
      </div>
    </div>
  </section>
)

export default AnnualMeeting
