import React, { useEffect, useRef, useState } from 'react'
import purebem from 'purebem'

import LocationMap from './LocationMap'

import getText from '../../assets/js/data/mygettext'

const block = purebem.of('location')

const Location = () => (
  <section className={block()}>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <div className={block('map')}>
            <LocationMap />
          </div>
        </div>
        <div className="one-half column">
          <h5 className={block('title')}>{getText('map_title')}</h5>
          <p className={block('body')}>
            {getText('map_body')}
            <a href="#faq">FAQ</a>.
            <span className={block('link')}>
              {getText('map_link')}
              <a
                href="https://www.google.se/maps/place/63%C2%B015'30.5%22N+12%C2%B026'51.0%22E/@60.3825553,1.0879701,4.66z/data=!4m2!3m1!1s0x0:0x0"
                target="_blank"
              >
                Google Maps
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default Location
