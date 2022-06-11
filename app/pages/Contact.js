import React, { Fragment, useContext } from 'react'

import Divider from '../components/Divider'
import Email from '../components/Email'
import Page from '../components/Page'

import LanguageContext from '../site/LanguageContext'
import { INFO, LARS, MIKAEL, PETER, ULLA } from '../utils/contacts'

import Address from './contact/Address'
import BoardMembers from './contact/BoardMembers'
import FacebookPages from './contact/FacebookPages'

const Contact = () => {
  const { isEnglish } = useContext(LanguageContext)

  return (
    <Page>
      <article>
        {isEnglish ? (
          <Fragment>
            <h3>Contact us</h3>
            <p>
              If you have any questions please don't hesitate to contact us at{' '}
              <Email to={INFO.email} /> and we'll get back to you as soon as possible. You can also
              contact someone on the Board directly depending on what the case concerns.
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <h3>Kontakta oss</h3>
            <p>
              Har du frågor om vår verksamhet kan du skicka ett mejl till <Email to={INFO.email} />{' '}
              så återkopplar vi så snart vi kan. Du kan även mejla direkt till någon av nedanstående
              styrelsemedlemmar, beroende på vad ärendet gäller.
            </p>
          </Fragment>
        )}
        <Address />
        <Divider />
        <FacebookPages />
        <Divider />
        <BoardMembers />
      </article>
    </Page>
  )
}

export default Contact
