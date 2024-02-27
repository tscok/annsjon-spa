import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Anchor from '../components/Anchor'
import Figure from '../components/Figure'
import Image from '../components/Image'
import Page from '../components/Page'
import LanguageContext from '../site/LanguageContext'

import imageSource from '../../assets/images/fagelskydd_steve-dahlfors.jpg'

const ANCHOR = {
  ramsar: <Anchor href="http://ramsar.org" label="Ramsarkonventionen" />,
  birdlife: <Anchor href="http://birdlife.org" label="Birdlife International" />,
}

const Fagelskydd = () => {
  const { isEnglish } = useContext(LanguageContext)
  const history = useHistory()

  useEffect(() => {
    if (isEnglish) history.push('/')
  })

  return (
    <Page>
      <article>
        <h3>Fågelskydd</h3>
        <p>
          Kalfjällets mycket speciella karaktär gör att bara ett fåtal starkt specialiserade arter
          klarar att leva och föröka sig här. Även i de fjällnära löv- och barrskogarna råder tidvis
          kärva förhållanden och många skogslevande fågelarter befinner sig här på gränsen av sitt
          utbredningsområde. Fåglarna lever här både bokstavligt och bildligt på marginalen och även
          små förändringar i livsbetingelserna kan få avsevärda konsekvenser.
        </p>
        <p>
          Ånnsjön är sedan 1974 ett Ramsarområde vilket innebär att här finns, ur internationellt
          perspektiv, ett skyddsvärt våtmarksområde. Genom att underteckna {ANCHOR.ramsar} har
          Sverige förbundit sig att skydda och bevara fågellivet i området. Ånnsjön-Storlien är
          dessutom ett av ca 70 IBA-områden i Sverige. IBA står för Important Bird Area, ungefär
          "Viktigt fågelområde", och är ett internationellt projekt som drivs av {ANCHOR.birdlife}.
        </p>
        <Figure caption="Foto: Steve Dahlfors">
          <Image source={imageSource} alt="Fågelskydd" />
        </Figure>
        <p>
          Att Ånnsjön finns upptagen i dessa två projekt visar hur värdefullt området är, inte bara
          lokalt utan också internationellt. Ånnsjöns fågelstations program för miljöövervakning
          innebär att vi årligen följer förekomsten hos för närvarande närmare sextio fågelarter som
          häckar i området. Det gör vi genom återkommande, standardiserade inventeringar, i myr- och
          fjällmiljöer samt fångst och ringmärkning av småfåglar i lövskogs- och buskområden runt
          Handöl, strax väster om Ånnsjön.
        </p>
        <p>
          Grunden för miljöskyddet utgörs av ett väl fungerande system för att följa
          populationsförändringar hos djur och växter. Efter drygt tjugo års undersökningar har vi
          börjat få den grund som är nödvändig för att vi ska kunna upptäcka och följa långsiktiga
          förändringar i fågelfaunan. Kortsiktiga förändringar under något eller några år är vanliga
          och beror oftast på vädret. Däremot kan långsiktiga förändringar bero på miljöförändringar
          som utdikning av våtmarker, högt betestryck, igenväxning av åkermark och förändrat
          skogsbruk. Andra orsaker kan vara kvicksilverförgiftning, försurning eller förändrat
          jakttryck. Orsakerna kan finnas i häckningsområdet, övervintringsområdet eller på viktiga
          rastplatser längs med flyttvägarna.
        </p>
        <p>
          Av de 58 fågelarter som vi någorlunda kan följa visar hälften (29 st) inga påtagliga
          förändringar. Dit hör exempelvis lommarna, de flesta änder, måsar, mesar, bergfink och
          sävsparv. Ökat har kanadagås, trana, myrsnäppa, gluttsnäppa, blåhake och gråsiska. Minskat
          har fler (22 st), bl.a. ljungpipare, tofsvipa, enkelbeckasin, brushane, trädgårdssångare,
          svartvit flugsnappare och ytterligare några långflyttande, insektsberoende tättingar.
        </p>
        <p>
          Orsakerna är sällan uppenbara och observerade förändringar måste analyseras och verifieras
          med kompletterande undersökningar. När det gäller de insektsberoende tättingarna tror vi
          att orsaken är att temperaturen under maj var betydligt lägre i slutet av 90-talet än den
          var i början.
        </p>
      </article>
      <aside>
        <h4>Relaterade länkar</h4>
        <ul>
          <li>
            <Anchor href="/file/iba/iba-sammanfattning.pdf" label="IBA sammanfattning" /> (pdf)
          </li>
          <li>
            <Anchor href="https://rsis.ramsar.org/ris/26" label="Ramsar om Ånnsjön" />
          </li>
          <li>
            <Anchor href="https://birdlife.se/fagelskydd/" label="Fågelskydd (SOF)" />
          </li>
        </ul>
      </aside>
    </Page>
  )
}

export default Fagelskydd
