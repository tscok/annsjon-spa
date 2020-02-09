import React from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'

const block = purebem.of('open-house')

const OpenHouse = () => (
  <section class={block()}>
    <div class="container">
      <h6 class={block('header')}>{getText('openhouse_header')}</h6>
      <div class={block('main')}>
        <h5 class={block('title')}>{getText('openhouse_title')}</h5>
        <p class={block('body')}>{getText('openhouse_body')}</p>
      </div>
      <div class={block('actions')}>
        <a href="#open-house" class="button button-primary">
          {getText('read-more')}
        </a>
      </div>
    </div>
  </section>
)

export default OpenHouse
