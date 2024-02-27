import React, { Fragment, useContext } from 'react'

import Figure from '../../components/Figure'
import Image from '../../components/Image'

import LanguageContext from '../../site/LanguageContext'
import useText, { interpolate } from '../../utils/useText'

import GuideSpecies from './GuideSpecies'

import image1Source from '../../../assets/images/storspov_steve-dahlfors.jpg'
import image2Source from '../../../assets/images/brushane_steve-dahlfors.jpg'

const species = {
  se: {
    $1: 'Simsnäppa',
    $2: 'Svarthakedopping',
    $3: 'Silvertärna',
    $4: 'Skrattmås',
    $5: 'Brushane',
    $6: 'Dvärgmås',
    $7: 'Smålom',
    $8: 'Storlom',
    $9: 'Kricka',
    $10: 'Bläsand',
    $11: 'Sjöorre',
    $12: 'Storspov',
    $13: 'Småspov',
    $14: 'Ljungpipare',
    $15: 'Grönbena',
    $16: 'Rödbena',
    $17: 'Gulärla',
    $18: 'Gluttsnäppa',
    $19: 'Enkelbeckasin',
    $20: 'Bergand',
    $21: 'Backsvala',
  },
  en: {
    $1: 'Phalarope',
    $2: 'Horned grebe',
    $3: 'Arctic tern',
    $4: 'Black-headed gull',
    $5: 'Ruff',
    $6: 'Little gull',
    $7: 'Red-throated loon',
    $8: 'Black-throated loon',
    $9: 'Common teal',
    $10: 'Eurasian wigeon',
    $11: 'Common scoter',
    $12: 'Curlew',
    $13: 'Whimbrel',
    $14: 'Golden plover',
    $15: 'Wood sandpiper',
    $16: 'Redshank',
    $17: 'Yellow wagtail',
    $18: 'Greenshank',
    $19: 'Snipe',
    $20: 'Greater scaup',
    $21: 'Sand martin',
  },
}

const Ann = () => {
  const { currentLanguage, isEnglish } = useContext(LanguageContext)
  const getText = useText()

  return (
    <Fragment>
      <article>
        <h3>Ånn</h3>
        {isEnglish ? (
          <Fragment>
            <p>
              {interpolate(
                `From the train station there is a hiking trail down to the bogs by the lake. First stop
            is the Lagoon, a small pond, a so-called overflow drain with connection to the water
            treatment plant in Ånn. Previously, it was a safe haven for $1, but unfortunately
            it's by no means safe to see $1 here anymore, probably due to decreased nutrient
            content. There is also a smaller platform with a view of a bay by Ånnsjön, Vallaviken,
            which extends towards Ånn. In the summer of 2005, a pair of $2 nested very close to the
            platform. When you continue on, you first reach Nätaholmen, a large and solid bird tower
            by the lake, then follows in turn Dolparna, a combined tower and hiding place, and
            furthest south, Halsenmossen, a real bird tower again.`,
                species.en,
              )}
            </p>
            <p>
              {interpolate(
                `Most rewarding from a bird's point of view is without a doubt Dolparna, which is one for
            the Ånnsjö area typical bog with plenty of small tufts. Here $3 and $4 nest, $5 play on
            the tufts and $1 and ducks can usually be seen on the open water surfaces. $6 has also
            nested in Dolparna In recent years.`,
                species.en,
              )}
            </p>
            <Figure caption={`${species.en.$12}. Photo: Steve Dahlfors`}>
              <Image source={image1Source} />
            </Figure>
            <p>
              {interpolate(
                `From both Nätaholmen and Halsen you have a fantastic view of the lake and the bog. The
            birds are further away than at Dolparna and more scattered. Tube binoculars are good to
            use at these places. $7, $8, $9, $10 and $11 are among the species you can usually see on
            the lake. On the bogs by the lake, $12, $13, $14, $15, $16 and $17 are character birds.
            $18 and $19 can also be seen.`,
                species.en,
              )}
            </p>
            <p>
              Ånnsjön should be enjoyed at a leisurely pace. Those who expect large numbers of birds
              and fast "check"'s risks being disappointed. Take your time at each stop, stay at
              least half an hour preferably an hour. The whole hike by Ånn then takes just over half
              a day. The one who is on transit and have time only for a short stop should in the
              first place go down to the lagoon and take a look at Vallaviken from the platform. If
              you have at least an hour or two a visit to Dolparrna is recommended. If you only go
              there, it is easiest to go down at FBU's course yard in the western part of the
              community Ånn. Signs are available.
            </p>
            <Figure caption={`${species.en.$5}. Photo: Steve Dahlfors`}>
              <Image source={image2Source} />
            </Figure>
            <p>
              {interpolate(
                `Just a few kilometers from Ånn is Klocka, an idyllic little village on the edge of
              Lake Ånnsjön. On the fields in the village you can with a little luck see both $14,
              $13 and $5. At the lake shore there is a small rest area with lovely views of the
              lake. The occasional $11 and $20 can usually be seen. Here you can also, as at Halsen,
              view those for Lake Ånnsjön special peat erosion slopes that occur when the bog meets
              the lake. $21 nests annually in the several meter high peat slopes.`,
                species.en,
              )}
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p>
              {interpolate(
                `Från järnvägsstationen utgår en vandringsled ner mot myrarna vid sjön. Första anhalten
            är Lagunen, en liten göl, ett så kallat bräddavlopp med koppling till
            vattenreningsverket i Ånn. Tidigare var det ett säkert tillhåll för $1, men tyvärr är
            det ingalunda säkert att få se $1 här längre, troligen på grund av att näringsinnehållet
            minskat. Här finns också en mindre plattform med utsikt över en vik av Ånnsjön,
            Vallaviken, som sträcker sig in mot Ånn. Sommaren 2005 häckade ett par $2 helt nära
            plattformen. När man fortsätter vidare når man först Nätaholmen, ett stort och rejält
            fågeltorn vid sjökanten, sedan följer i tur och ordning Dolparna, ett kombinerat torn
            och gömsle, och längst söderut, Halsenmossen, ett rejält fågeltorn igen.`,
                species.se,
              )}
            </p>
            <p>
              {interpolate(
                `Mest givande ur fågelsynpunkt är utan tvekan Dolparna, som är en för Ånnsjöområdet
            typisk myrgöl med gott om småtuvor. Här häckar $3 och $4, $5 spelar på tuvorna och $1
            och änder brukar kunna beskådas på de fria vattenytorna. $6 har också häckat i Dolparna
            under senare år.`,
                species.se,
              )}
            </p>
            <Figure caption={`${species.se.$12}. Foto: Steve Dahlfors`}>
              <Image source={image1Source} />
            </Figure>
            <p>
              {interpolate(
                `Från både Nätaholmen och Halsen har man en fantastiskt fin utsikt över sjön och myren.
            Fåglarna är längre bort än vid Dolparna och mer utspridda. Tubkikare är bra att ha på
            dessa platser. $7, $8, $9, $10 och $11 hör till de arter man brukar kunna få se på
            vattnet. På myrarna vid sjön är $12, $13, $14, $15, $16 och $17 karaktärsfåglar. $18 och
            $19 förekommer också regelbundet.`,
                species.se,
              )}
            </p>
            <p>
              Ånnsjön ska avnjutas i lugn takt. Den som väntar sig stora fågelmängder och snabba
              kryss riskerar att bli besviken. Ta god tid på dig vid varje anhalt, stanna minst en
              halvtimme gärna en timme. Hela vandringen vid Ånn tar då drygt en halv dag. Den som är
              på genomresa och har tid bara för ett kort stopp bör i första hand gå ner till lagunen
              och ta en titt över Vallaviken från plattformen. Om man åtminstone har en timme eller
              två på sig rekommenderas ett besök vid Dolparna. Om man enbart ska dit är det enklast
              att gå ner vid FBU:s kursgård i västra delen av samhället Ånn. Skyltar finns.
            </p>
            <Figure caption={`${species.se.$5}. Foto: Steve Dahlfors`}>
              <Image source={image2Source} />
            </Figure>
            <p>
              {interpolate(
                `Bara några kilometer från Ånn ligger Klocka, en idyllisk liten by vid kanten av
              Ånnsjön. På fälten i byn kan man med lite tur få se både $14, $13 och $5. Vid
              sjökanten finns en liten rastplats med härlig utsikt över sjön. En och annan $11 och
              $20 brukar man kunna få syn på. Här kan man också, liksom vid Halsen, beskåda de för
              Ånnsjön speciella torverosionsbranterna som uppstår när myren möter vattnet. $21
              häckar årligen i de flera meter höga torvbranterna.`,
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

export default Ann
