import React, { Fragment, useContext } from 'react'

import Figure from 'app/components/Figure'
import Image from 'app/components/Image'

import LanguageContext from 'app/site/LanguageContext'
import useText, { interpolate } from 'app/utils/useText'

import GuideSpecies from './GuideSpecies'

import imageSource from '../../../assets/images/dbeckasin_steve-dahlfors.jpg'

const species = {
  se: {
    $1: 'Myrsnäppa',
    $2: 'Blåhake',
    $3: 'Dubbelbeckasin',
    $4: 'Lappsparv',
    $5: 'Fjällabb',
    $6: 'Kärrsnäppa',
  },
  en: {
    $1: 'Broad-billed sandpiper',
    $2: 'Bluethroat',
    $3: 'Great snipe',
    $4: 'Lapland bunting',
    $5: 'Long-tailed skua',
    $6: 'Dunlin',
  },
}

const Storlien = () => {
  const { currentLanguage, isEnglish } = useContext(LanguageContext)
  const getText = useText()

  return (
    <Fragment>
      <article>
        <h3>Storlien</h3>
        {isEnglish ? (
          <Fragment>
            <p>
              {interpolate(
                `This ancient ski metropolis has a lot to offer the bird watcher. About a mile east of
            Storlien on the south side of the railway there is a footbridge with two observation
            hides and a windbreak. They are located in a small wetland area in connection to
            Storlien's sewage treatment plant. The wetland birds are largely same as in Ånn. $1
            sometimes occur on the bog that can be viewed from the windbreak. $2 has a reliable
            occurrence in birch and willow thickets in the edges of the wetland area. The whole area
            is a bird protection area and may only be viewed from marked joints.`,
                species.en,
              )}
            </p>
            <p>
              {interpolate(
                `For those interested in birds, Storlien is best known for the $3 lek located on
            Skurdalshöjden. It is easiest to reach if you follow the lift street (Bånggårdsliften)
            which starts from the back of Hotel Högfjäll. From the penultimate lift pole turn left,
            upwards the slope. The lek is located 200-300 meters from the lift street about halfway
            between this lift and another lift that ends at about the same level due west. Listen
            carefully as you approach. The faint sounds from the lek is heard only about one hundred
            meters.`,
                species.en,
              )}
            </p>
            <Figure caption="Greate snipe. Photo: Steve Dahlfors">
              <Image source={imageSource} />
            </Figure>
            <p>
              {interpolate(
                `The birds are mainly active during the night and before 11 pm it does not make much
            sense to be in place. There is a hiding place on the site, but it works more like a rest
            cabin than as an observation hide, as the birds rarely play in front of the hide. Other
            parts of the low mountain Skurdalshöjden are also of ornithological interest. The area
            between Vindarnas tempel and Åhlénstugan can usually offer $4, $2, $5 and $6.`,
                species.en,
              )}
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p>
              {interpolate(
                `Denna anrika skidmetropol har en hel del att erbjuda fågelskådaren. Cirka en kilometer
            öster om Storlien på södra sidan järnvägen finns en spångad led med två
            observationsgömslen och ett vindskydd. De ligger vid ett mindre våtmarksområde i
            anslutning till Storliens avloppsreningsanläggning. Våtmarksfåglarna är i stort sett
            desamma som i Ånn. $1 förekommer ibland på den myr som kan beskådas från vindskyddet. $2
            har en pålitlig förekomst i björk- och videsnåren i våtmarksområdets kanter. Hela
            området är fågelskyddsområde och får endast avspanas från markerade leder.`,
                species.se,
              )}
            </p>
            <p>
              {interpolate(
                `För den fågelintresserade är Storlien mest känt för den $3spelplats som ligger på
            Skurdalshöjden. Den nås enklast om man följer den liftgata (Bånggårdsliften) som utgår
            från baksidan av Högfjällshotellet. Från den näst sista liftstolpen svänger man av snett
            uppåt vänster i sluttningen. Spelplatsen ligger 200-300 meter från liftgatan ungefär
            mittemellan denna lift och en annan lift som slutar på ungefär samma nivå längre
            västerut. Lyssna noga när du närmar dig. Det svaga spellätet hörs bara något hundratal
            meter.`,
                species.se,
              )}
            </p>
            <Figure caption="Dubbelbeckasin. Foto: Steve Dahlfors">
              <Image source={imageSource} />
            </Figure>
            <p>
              {interpolate(
                `Fåglarna är huvudsakligen aktiva under natten och före kl 23 är det ingen större mening
            att vara på plats. Ett gömsle finns på platsen, men det fungerar mer som raststuga än
            som observationsgömsle, då fåglarna sällan spelar framför gömslet. Även de övriga
            delarna av lågfjället Skurdalshöjden är av ornitologiskt intresse. Området mellan
            Vindarnas tempel och Åhlénstugan brukar kunna bjuda på $4, $2, $5 och $6.`,
                species.se,
              )}
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

export default Storlien
