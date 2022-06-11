import React, { Fragment, useContext } from 'react'

import Figure from 'app/components/Figure'
import Image from 'app/components/Image'

import LanguageContext from 'app/site/LanguageContext'
import useText, { interpolate } from 'app/utils/useText'

import GuideSpecies from './GuideSpecies'

import imageSource from '../../../assets/images/bergfink_steve-dahlfors.jpg'

const species = {
  se: {
    $1: 'trädgårdssångare',
    $2: 'svarthätta',
    $3: 'härmsångare',
    $4: 'bergfink',
    $5: 'Lundsångare',
    $6: 'dvärgsparv',
    $7: 'Mindre hackspett',
  },
  en: {
    $1: 'Garden warbler',
    $2: 'Blackcap',
    $3: 'Icterine warbler',
    $4: 'Brambling',
    $5: 'Greenish warbler',
    $6: 'Little bunting',
    $7: 'Lesser spotted woodpecker',
  },
}

const Handol = () => {
  const { currentLanguage, isEnglish } = useContext(LanguageContext)
  const getText = useText()

  return (
    <Fragment>
      <article>
        <h3>Handöl</h3>
        {isEnglish ? (
          <Fragment>
            <p>
              Handöl is located just west of Ånnsjön and is separated from the lake by Enan and
              Handölan's joint delta area. Park at former Pensionat Handöl or at Lake Ånnsjön's Bird
              Observatory, the base for the ongoing scientific investigations of bird life in the
              area.
            </p>
            <p>
              The Observatory building, at the edge of Lomtjärnsmyren, is equipped with a platform
              on the roof which is open to the public. Tube binoculars are good to have here. The
              birds are about same as in Ånn. There is also an information room that is open when
              the Observatory is staffed, normally from the beginning of June to the end of August.
            </p>
            <Figure caption="Brambling. Photo: Steve Dahlfors">
              <Image source={imageSource} />
            </Figure>
            <p>
              {interpolate(
                `Along the river Handölan's course through Handöl stretches a lush, deciduous forest
              dominated area with a rich bird life. Among others, $1, $2, $3 and $4 breed here. $5
              have nested at least once in the 1990's and $6 have been heard. $7 are seen regularly.
              During July and August we are conducting bird ringing in the area.`,
                species.en,
              )}
            </p>
            <p>
              Lake Ånnsjön and the outer parts of the delta are difficult to reach from Handöl if
              you do not have a boat. For the birdwatcher, it matters less as the bird life does not
              differ significantly from what one can see in Ånn. From the road between Handöl and
              Bunnerviken, close to the soapstone factory, you have a nice view of the delta and the
              lake.
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p>
              Handöl ligger strax väster om Ånnsjön och skiljs från sjön genom Enans och Handölans
              gemensamma deltaområde. Parkera vid f.d. Pensionat Handöl eller vid Ånnsjöns
              fågelstation, basen för de fortlöpande vetenskapliga undersökningarna av fågellivet i
              området.
            </p>
            <p>
              Stationsbyggnaden, vid kanten av Lomtjärnsmyren, är försedd med en plattform på taket
              som är tillgänglig för allmänheten. Tubkikare är bra att ha här. Fåglarna är ungefär
              desamma som i Ånn. Här finns även en informationslokal som är öppen när stationen är
              bemannad, normalt sett från början av juni till slutet av augusti.
            </p>
            <Figure caption="Bergfink. Foto: Steve Dahlfors">
              <Image source={imageSource} />
            </Figure>
            <p>
              {interpolate(
                `Längs älven Handölans lopp genom Handöl sträcker sig ett lummigt, lövskogsdominerat
              område med ett rikt fågelliv. Bland annat häckar här $1, $2, $3 och $4. $5 har häckat
              minst en gång på 1990-talet och $6 har hörts. $7 ses regelbundet. Under juli och
              augusti bedriver fågelstationen ringmärkning i området.`,
                species.se,
              )}
            </p>
            <p>
              Ånnsjön och de yttre delarna av deltat är svåra att nå från Handöl om man inte har
              båt. För fågelskådaren spelar det mindre roll då fågellivet inte skiljer sig nämnvärt
              från det man kan se i Ånn. En fin utsikt över deltat och sjön har man från vägen
              mellan Handöl och Bunnerviken, just där den utgår från täljstensfabriken.
            </p>
          </Fragment>
        )}
      </article>
      <GuideSpecies
        items={Object.values(species[currentLanguage])}
        title={getText('species_locale_title')}
      />
    </Fragment>
  )
}

export default Handol
