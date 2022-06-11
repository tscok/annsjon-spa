import React, { Fragment, useContext } from 'react'

import LanguageContext from '../../site/LanguageContext'
import useText from '../../utils/useText'

import Event from './Event'

const Events = () => {
  const { isEnglish } = useContext(LanguageContext)
  const getText = useText()

  if (isEnglish) {
    return null
  }

  return (
    <Fragment>
      <Event
        body={getText('annual-meeting_body')}
        category={getText('annual-meeting_header')}
        title={getText('annual-meeting_title')}
      />
      <Event
        body="Många av våra fågelholkar börjar bli till åren och behöver bytas ut. För att kunna köpa in
          nya holkar till våra holkprojekt ansökte vi om bidrag från Strangells stiftelse och vår
          ansökan har nu beviljats!"
        category="Strangells Stiftelse"
        link="/sponsors"
        title="Nya fågelholkar"
        withBGColor
      />
    </Fragment>
  )
}

export default Events
