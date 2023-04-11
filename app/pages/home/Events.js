import React, { Fragment, useContext } from 'react'

import { THOMAS } from 'app/utils/contacts'
import LanguageContext from '../../site/LanguageContext'
import useText from '../../utils/useText'

import Email from 'app/components/Email'
import Heading from '../../components/Heading'
import PageSection from '../../components/PageSection'
import Figure from '../../components/Figure'
import Background from '../../components/Background'
import imageBrushane from '../../../assets/images/brushane_thomas-holmberg.jpg'
import Grid from '../../components/Grid'

const Events = () => {
  const { isEnglish } = useContext(LanguageContext)
  const getText = useText()

  if (isEnglish) {
    return null
  }

  return (
    <Fragment>
      {/* <Event
        body={getText('annual-meeting_body')}
        category={getText('annual-meeting_header')}
        title={getText('annual-meeting_title')}
      /> */}
      {/* <Event
        body="Många av våra fågelholkar börjar bli till åren och behöver bytas ut. För att kunna köpa in
          nya holkar till våra holkprojekt ansökte vi om bidrag från Strangells stiftelse och vår
          ansökan har nu beviljats!"
        category="Strangells Stiftelse"
        link="/sponsors"
        title="Nya fågelholkar"
        withBGColor
      /> */}
      <PageSection styles={{ backgroundColor: '#f5f5f5' }} title="Aktuellt">
        <Grid columns="repeat(2, 1fr)">
          <Figure caption="Brushane. Foto: Thomas Holmberg">
            <Background height="300px" position="50% 100%" source={imageBrushane} />
          </Figure>
          <article>
            <Heading level="h5">Årets myrinventering genomförs 4-11 juni 2023</Heading>
            <p>Vi söker fågelintresserade som är välbekanta med de vanligt förekommande myrfåglarna i det fjällnära området. Ingen tidigare inventeringsvana behövs. Vi bor på fågelstationen i Handöl och inventerar våtmarker i omgivningarna.</p>
            <p>För mer information, kontakta Thomas Holmberg, <Email to={THOMAS.email} /> eller 073 - 058 36 30</p>
          </article>
        </Grid>
      </PageSection>
    </Fragment>
  )
}

export default Events
