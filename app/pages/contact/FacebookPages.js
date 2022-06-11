import React, { Fragment } from 'react'

import Anchor from 'app/components/Anchor'

import useText from 'app/utils/useText'

const FacebookPages = () => {
  const getText = useText()

  return (
    <Fragment>
      <h4>{getText('facebook_title')}</h4>
      <ul>
        <li>
          <Anchor href="https://www.facebook.com/Annsjon" label={getText('site_title')} />
        </li>
        <li>
          <Anchor
            href="https://www.facebook.com/groups/174058694282/"
            label="Friends of Lake Ånnsjön Bird Observatory"
          />
        </li>
      </ul>
    </Fragment>
  )
}

export default FacebookPages
