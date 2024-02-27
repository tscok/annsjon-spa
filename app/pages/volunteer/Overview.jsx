import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom'

import Email from '../../components/Email'
import LanguageContext from '../../site/LanguageContext'
import { ULLA } from '../../utils/contacts'

const Overview = () => {
  const { isEnglish } = useContext(LanguageContext)

  return (
    <article>
      {isEnglish ? (
        <Fragment>
          <h3>Volunteer</h3>
          <p>
            The long-term goal of our observatory is to document the existing bird populations and
            their fluctuations in our study area as well as possible, given available resources.
            This information may be used for many purposes, e.g. environmental protection or climate
            research. We try to combine rigorous scientific work with a friendly and welcoming
            atmosphere for all our volunteers.
          </p>
          <p>
            We need volunteers from June 1 to August 31, and some years in May and September too.
            The best time for census work and general bird watching is mid-June. For mist netting
            and ringing, July and August. The peak season for ringing is the last two weeks in July
            and the first two weeks in August. During this time we try to run ringing at two sites
            in parallel.
          </p>
          <p>
            Lake Ånnsjön Bird Observatory is a non-profit organization run entirely by volunteers.
            No salaries are paid. In some specific projects, we may have an opportunity to reimburse
            expenses such as train tickets. Accommodation is free for all volunteers.
          </p>
          <p>
            <Link to="/volunteer/application">Apply here</Link>
          </p>
          <h4>Questions &amp; Answers</h4>
          <p>
            We have gathered common <Link to="/volunteer/information">Questions &amp; Answers</Link>{' '}
            that we encourage volunteers to read. For any questions regarding staff recruitment
            please contact <Email to={ULLA.email} />.
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <h3>Medarbetare</h3>
          <p>
            Ånnsjöns fågelstation studerar sedan 1989 fågellivet i västra Jämtlandsfjällen. Syftet
            är miljöövervakning, dokumentation av klimatförändringar, och ekologisk grundforskning.
          </p>
          <p>
            Verksamheten bedrivs i form av ett antal projekt som vart och ett omfattar 1-2 veckors
            fältarbete för en grupp om 2-8 personer.
          </p>
          <p>
            Vi söker <i>inventerare</i> till våra olika inventeringsprojekt i juni. Du bör vara en
            van fältornitolog och känna till de vanliga fjäll- och våtmarksarterna till utseende och
            läte. Det underlättar om du också har kondition för dagliga vandringar över fjäll och
            myr, samt vana vid karta, kompass och GPS.
          </p>
          <p>
            Vi söker <i>ringmärkare</i> och <i>assistenter</i> till våra nätfångstprojekt i juli och
            augusti. Samkörda grupper med 2-4 ringmärkare och assistenter är särskilt välkomna! Som
            ringmärkare har du egen licens, medhjälparlicens eller stor erfarenhet av ringmärkning
            på fågelstation eller motsvarande. Assistenter behöver inte ha tidigare erfarenhet av
            nätfångst och ringmärkning, och kan bara beredas plats under perioder då vi har minst en
            erfaren ringmärkare på stationen.
          </p>
          <p>
            Ånnsjöns fågelstation erbjuder fri logi i vårt bekväma hus i Handöl, och en oslagbar
            upplevelse i Ånnsjönfjällen. Varmt välkommen!
          </p>
          <p>
            <Link to="/volunteer/application">Anmäl dig här</Link>
          </p>
          <h4>Frågor &amp; Svar</h4>
          <p>
            Vi har sammanställt vanliga <Link to="/volunteer/information">Frågor &amp; Svar</Link>{' '}
            som vi uppmuntrar våra medarbetare att läsa. Frågor som rör rekrytering hänvisar vi till{' '}
            <Email to={ULLA.email} />.
          </p>
        </Fragment>
      )}
    </article>
  )
}

export default Overview
