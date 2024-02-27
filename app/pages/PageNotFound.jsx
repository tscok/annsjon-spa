import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'

import Email from '../components/Email'
import Page from '../components/Page'
import LanguageContext from '../site/LanguageContext'

import { MIKAEL } from '../utils/contacts'

const PageNotFound = () => {
  const { isEnglish } = useContext(LanguageContext)
  const { pathname } = useLocation()

  return (
    <Page>
      {isEnglish ? (
        <article>
          <h1>
            <b>Oops!</b>
          </h1>
          <h3>
            Page <b>{pathname}</b> not found
          </h3>
          <p>
            If the page was here it might have been moved or removed. If you can't find what you're
            looking for, or have a suggestion on improvements, please contact us:
            <br />
            <Email to={MIKAEL.email} />
          </p>
          <p>
            <Link to="/">Back to safety</Link>
          </p>
        </article>
      ) : (
        <article>
          <h1>
            <b>Hoppsan!</b>
          </h1>
          <h3>
            Sidan <b>{pathname}</b> hittades inte
          </h3>
          <p>
            Om sidan har funnits tidigare så har den kanske flyttats, eller tagits bort. Om du inte
            hittar det du söker eller har förslag på förbättringar, kontakta oss på:
            <br />
            <Email to={MIKAEL.email} />
          </p>
          <p>
            <Link to="/">Till startsidan</Link>
          </p>
        </article>
      )}
    </Page>
  )
}

export default PageNotFound
