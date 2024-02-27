import React from 'react'

import Anchor from '../components/Anchor'
import Page from '../components/Page'

const Sponsors = () => {
  return (
    <Page>
      <article>
        <h3>Nya holkar på G!</h3>
        <p>
          Den 22 januari 2020 fick fågelstationen ett positivt besked - vi har beviljats medel av
          Strangells stiftelse för att köpa in nya holkar till våra holkprojekt.
        </p>
        <p>
          En del av holkarna börjar bli till åren och behöver bytas ut, därmed ansökte vi om bidrag
          för att kunna fixa nya.
        </p>
        <p>
          Strangells stiftelse är en stiftelse för ett rikt djur- och naturliv. Maria och Eric
          Strangells stiftelse för natur- och djurskydd bildades våren 2015 utifrån ett testamente
          efter konstnären Ingeborg Strangell. Syftet är delvis att dela ut medel som skall användas
          till gagn för djur- och naturskyddet. Projekt inom norrlandslänen är prioriterade.
        </p>
        <p>
          Aktörer kan utan speciell utlysningsperiod, ansöka om bidrag upp till 10 000 kr för
          genomförande av egna aktiviteter i linje med stiftelsens huvudinriktning. Aktiviteterna
          ska då genomföras inom Jämtlands, Västernorrlands eller Gävleborgs län. Om innevarande års
          tillgängliga belopp är förbrukat, eller av annat skäl som styrelsen beslutar, kan
          utlysningen stängas. Svar på ansökningar ges inom 30 dagar.
        </p>
        <p>
          <Anchor
            href="http://www.strangellsstiftelse.se/utlysningar/"
            label="Strangells Stiftelse"
          />
        </p>
      </article>
    </Page>
  )
}

export default Sponsors
