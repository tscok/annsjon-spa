import React, { Fragment, useContext } from 'react'

import Figure from '../../components/Figure'
import Image from '../../components/Image'

import LanguageContext from '../../site/LanguageContext'
import useText, { interpolate } from '../../utils/useText'

import GuideSpecies from './GuideSpecies'

import imageSource from '../../../assets/images/blahake_steve-dahlfors.jpg'

const species = {
  se: {
    $1: 'Fjällripa',
    $2: 'Dalripa',
    $3: 'Blåhake',
    $4: 'Fjällpipare',
    $5: 'Snösparv',
    $6: 'Kungsörn',
    $7: 'Fjällvråk',
    $8: 'Stenfalk',
    $9: 'Fjällabb',
    $10: 'Lappsparv',
    $11: 'Alfågel',
    $12: 'Skärsnäppa',
    $13: 'Kärrsnäppa',
    $14: 'Mosnäppa',
    $15: 'Större strandpipare',
    $16: 'Smalnäbbad simsnäppa',
    $17: 'Bergand',
    $18: 'Sjöorre',
    $19: 'Småspov',
    $20: 'Jorduggla',
  },
  en: {
    $1: 'Ptarmigan',
    $2: 'Willow grouse',
    $3: 'Bluethroat',
    $4: 'Dotterel',
    $5: 'Snow bunting',
    $6: 'Golden eagle',
    $7: 'Rough-legged buzzard',
    $8: 'Merlin',
    $9: 'Long-tailed skua',
    $10: 'Lapland bunting',
    $11: 'Long-tailed duck',
    $12: 'Purple sandpiper',
    $13: 'Dunlin',
    $14: "Temminck's stint",
    $15: 'Ringed plover',
    $16: 'Red-necked phalarope',
    $17: 'Greater scaup',
    $18: 'Common scoter',
    $19: 'Whimbrel',
    $20: 'Short-eared owl',
  },
}

const Storulvan = () => {
  const { currentLanguage, isEnglish } = useContext(LanguageContext)
  const getText = useText()

  return (
    <Fragment>
      <article>
        <h3>Storulvån</h3>
        {isEnglish ? (
          <Fragment>
            <p>
              {interpolate(
                `If you want to go up in the mountains, Storulvån and the road to Storulvån are suitable
            starting points. Closest to Storulvån is Getryggen, which is easy to reach even if
            the steep climb can be palpable. $1, $2 and $3 are common in the area, and at higher
            altitudes $4 and $5. $6 is sometimes seen at Storulvån, but $7 and $8 are much more
            common.`,
                species.en,
              )}
            </p>
            <Figure caption="Bluethroat. Photo: Steve Dahlfors">
              <Image source={imageSource} />
            </Figure>
            <p>
              {interpolate(
                `A slightly longer but easier route is to walk to Ulvåtjärn, about 6 km from Storulvån
            along the trail towards Blåhammaren. At Ulvåtjärn $9 is regularly seen and the slope up
            towards Storulvåfjället, just south of Ulvåtjärn, is usually a safe spot for $10. If you
            continue the trail from Ulvåtjärn towards Blåhammaren, up a long climb, you reach a nice
            mountain plateau with a number of small ponds, like in a pearl band towards the mountain
            station, Blacktjärnarna. In and around these waters, ducks and waders such as $11, $12,
            $13, $14 and $15 are often seen. $1 and $9 are other common species.`,
                species.en,
              )}
            </p>
            <p>
              {interpolate(
                `After about 3 km along the trail towards Sylarna, you reach the suspension bridge over
            Lill-Ulvån. South of the bridge you can follow the river some distance to the southwest.
            After 1-1.5 km you enter an area that all the way down to Spåime windbreak is rich in
            ponds and small wetlands surrounded by mountain heath and small hills. $16 can sometimes
            be found here. $11, $17, $18 can be seen, as well as many different waders. $19 is a
            common sight while $13 is seen less often. $3, $10 and with a little luck $8. $20 or $7
            are other species to look out for, as well as $9, $1 and $2.`,
                species.en,
              )}
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <p>
              {interpolate(
                `Om man vill upp på fjället är Storulvån och vägen mot Storulvån en lämplig utgångspunkt.
            Närmast Storulvån ligger Getryggen som är lätt att nå även om den branta stigningen kan
            vara kännbar. Ripor av bägge arterna, $3 och på högre höjd $4 och $5 hör till de fåglar
            man kan få syn på. $6 ses ibland vid Storulvån, men $7 och $8 är betydligt vanligare.`,
                species.se,
              )}
            </p>
            <Figure caption="Blåhake. Foto: Steve Dahlfors">
              <Image source={imageSource} />
            </Figure>
            <p>
              {interpolate(
                `En lite längre men lättsammare promenad är att gå till i Ulvåtjärn ca 6 km från
            Storulvån efter leden mot Blåhammaren. Vid Ulvåtjärn ses regelbundet $9 och sluttningen
            upp mot Storulvåfjället strax söder om Ulvåtjärn brukar vara en säker plats för $10. Om man
            från Ulvåtjärn fortsätter leden mot Blåhammaren uppför den långa stigningen når man en
            fin kalfjällplatå med ett flertal småvatten som i ett pärlband bort mot fjällstationen,
            Blacktjärnarna. I och omkring dessa ses ofta änder och vadare som $11, $12, $13, $14 och
            $15. $1 och $9 är andra karaktärsarter.`,
                species.se,
              )}
            </p>
            <p>
              {interpolate(
                `Efter ca 3 km längs leden mot Sylarna når man hängbron över Lill-Ulvån. Söder om denna
            kan man följa ån ett stycke åt sydväst. Efter 1–1,5 km kommer man in i ett område som
            hela vägen ner emot Spåime rastskydd är rikt på tjärnar och små våtmarker omgivna av
            fjällhed och små kullar. Här hittas ibland $16. $11, $17, $18 kan ses liksom många olika
            vadare. $19en är en vanlig syn medan $13 ses mer sällan. $3, $10 och med lite tur någon
            $8, $20 eller $7 är andra arter att hålla utkik efter, liksom $9 och ripor.`,
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

export default Storulvan
