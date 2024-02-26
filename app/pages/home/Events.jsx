import React, { Fragment, useContext } from 'react'

import { INFO } from '../../utils/contacts'
import LanguageContext from '../../site/LanguageContext'

import Email from '../../components/Email'
import Heading from '../../components/Heading'
import PageSection from '../../components/PageSection'
import Figure from '../../components/Figure'
import Background from '../../components/Background'
import imageBrushane from '../../../assets/images/brushane_thomas-holmberg.jpg'
import Grid from '../../components/Grid'

const dict = {
  section_title: {
    se: 'Aktuellt',
    en: 'Events',
  },
  caption: {
    se: 'Brushane. Foto:',
    en: 'Ruff. Photo:',
  },
}

const Events = () => {
  const { isEnglish, currentLanguage } = useContext(LanguageContext)

  return (
    <Fragment>
      <PageSection
        styles={{ backgroundColor: '#f5f5f5' }}
        title={`${dict.section_title[currentLanguage]} 2024`}
      >
        <Grid columns="repeat(2, 1fr)">
          <Figure caption={`${dict.caption[currentLanguage]} Thomas Holmberg`}>
            <Background
              height="300px"
              position="50% 100%"
              source={imageBrushane}
            />
          </Figure>
          {isEnglish ? (
            <article>
              <Heading level="h4">Staff wanted for this year's season</Heading>
              <Heading level="h5">Wetland bird survey June 2-16</Heading>
              <p>
                We are looking for bird enthusiasts who are familiar with the
                common marsh birds in the area near the mountains. No previous
                survey experience is needed. Accomodation at the bird
                observatory in Handöl.
              </p>
              <Heading level="h5">Bird ringing July 1 - August 31</Heading>
              <p>Ringers experienced in net catching wanted.</p>
              <p>
                For more informtaion of either project, contact us at{' '}
                <Email to={INFO.email} />
              </p>
            </article>
          ) : (
            <article>
              <Heading level="h4">Personal sökes till årets säsong</Heading>
              <Heading level="h5">Våtmarksinventering 2-16 juni</Heading>
              <p>
                Vi söker fågelintresserade som är välbekanta med de vanligt
                förekommande myrfåglarna i det fjällnära området. Ingen tidigare
                inventeringsvana behövs. Vi bor på fågelstationen i Handöl och
                inventerar våtmarker i omgivningarna.
              </p>
              <Heading level="h5">Ringmärkning 1 juli - 31 augusti</Heading>
              <p>Ringmärkare med vana vid nätfångst sökes.</p>
              <p>
                För mer information om dessa projekt, skriv till{' '}
                <Email to={INFO.email} />
              </p>
            </article>
          )}
        </Grid>
      </PageSection>
    </Fragment>
  )
}

export default Events
