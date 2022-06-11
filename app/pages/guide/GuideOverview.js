import React, { Fragment, useContext } from 'react'

import GuideSpecies from './GuideSpecies'

import LanguageContext from 'app/site/LanguageContext'
import useText, { interpolate } from 'app/utils/useText'

const species = {
  se: {
    $1: 'Silvertärna',
    $2: 'Smalnäbbad simsnäppa',
    $3: 'Småspov',
    $4: 'Brushane',
    $5: 'Smålom',
    $6: 'Storlom',
    $7: 'Svärta',
    $8: 'Sjöorre',
    $9: 'Bläsand',
    $10: 'Vigg',
    $11: 'Bergand',
  },
  en: {
    $1: 'Arctic Tern',
    $2: 'Red-necked Phalarope',
    $3: 'Whimbrel',
    $4: 'Ruff',
    $5: 'Red-throated Loon',
    $6: 'Black-throated Loon',
    $7: 'Velvet Scoter',
    $8: 'Common Scoter',
    $9: 'Eurasian Wigeon',
    $10: 'Tufted Duck',
    $11: 'Greater Scaup',
  },
}

const GuideOverview = () => {
  const { currentLanguage, isEnglish } = useContext(LanguageContext)
  const getText = useText()

  return (
    <Fragment>
      {isEnglish ? (
        <article>
          <h3>Watcher's Guide</h3>
          <p>
            {interpolate(
              `In the middle of May, or a week before that if spring is early, the actual bird season
            starts at Ånnsjön. The ice begins to break up at estuaries and bogs are
            becoming snow-free. Mallards and waders arrive gradually and in about two weeks all the
            birds are there with $1 and $2 among the last arrivals.`,
              species.en,
            )}
          </p>
          <p>
            {interpolate(
              `During the first half of June, the activity is at its peak with singing $3s and $4s
            playing on the bogs. On the lake are $5, $6, $7, $8, $9, $10, $11 and other seabirds.`,
              species.en,
            )}
          </p>
          <p>
            Already after midsummer, bird life slows down, but still during July and until
            mid-August, the lake with surrounding marsh areas and mountains can be well worth a
            visit for bird watchers.
          </p>
        </article>
      ) : (
        <article>
          <h3>Skådarguide</h3>
          <p>
            {interpolate(
              `I mitten av maj, eller någon vecka dessförinnan om våren är tidig, startar den egentliga
            fågelsäsongen vid Ånnsjön. Då börjar sjön gå upp vid älvmynningar och myrarna börjar bli
            snöfria. Änder och vadare anländer efterhand och på ungefär två veckor är alla fåglar där
            med $1 och $2 som de sista flyttfåglarna.`,
              species.se,
            )}
          </p>
          <p>
            {interpolate(
              `Under första halvan av juni är aktiviteten som högst med drillande $3 och spelande $4 på
            myrarna och $5, $6, $7, $8, $9, $10, $11 och flera andra sjöfåglar på sjön.`,
              species.se,
            )}
          </p>
          <p>
            Redan efter midsommar mattas fågellivet, men fortfarande under juli och fram till mitten
            av augusti kan sjön med omgivande myrområden och fjäll vara väl värda ett besök även för
            den fågelintresserade.
          </p>
        </article>
      )}
      <GuideSpecies
        items={Object.values(species[currentLanguage])}
        title={getText('species_title')}
      />
    </Fragment>
  )
}

export default GuideOverview
