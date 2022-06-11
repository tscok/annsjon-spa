import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Anchor from '../../components/Anchor'
import Divider from '../../components/Divider'

const annualReports = [
  { year: 2013, file: '/file/reports/annual-report-2013.pdf', size: '23,5 MB' },
  { year: 2012, file: '/file/reports/annual-report-2012.pdf', size: '2,4 MB' },
  { year: 2011, file: '/file/reports/annual-report-2011.pdf', size: '2,6 MB' },
  { year: 2010, file: '/file/reports/annual-report-2010.pdf', size: '3,6 MB' },
  { year: 2009, file: '/file/reports/annual-report-2009.pdf', size: '5,8 MB' },
  { year: 2008, file: '/file/reports/annual-report-2008.pdf', size: '1,9 MB' },
  { year: 2007, file: '/file/reports/annual-report-2007.pdf', size: '5,5 MB' },
  { year: 2006, file: '/file/reports/annual-report-2006.pdf', size: '9,8 MB' },
  { year: 2005, file: '/file/reports/annual-report-2005.pdf', size: '1,9 MB' },
  { year: 2004, file: '/file/reports/annual-report-2004.pdf', size: '1,4 MB' },
  { year: 2003, file: '/file/reports/annual-report-2003.pdf', size: '6,3 MB' },
  { year: 2002, file: '/file/reports/annual-report-2002.pdf', size: '5,6 MB' },
  { year: 2001, file: '/file/reports/annual-report-2001.pdf', size: '< 1 MB' },
  { year: 2000, file: '/file/reports/annual-report-2000.pdf', size: '< 1 MB' },
  { year: 1999, file: '/file/reports/annual-report-1999.pdf', size: '< 1 MB' },
]

const Overview = () => {
  return (
    <Fragment>
      <article>
        <h3>Rapporter</h3>
        <p>
          Vi delar gärna med oss av vårt material, så att du som vill kan göra egna
          sammanställningar eller undersökningar. Kontakta oss så hjälper vi dig att ta fram
          specifika uppgifter ur vår databas.
        </p>
        <Divider />
        <h4>Pressmeddelanden</h4>
        <p>
          På hemsidan:{' '}
          <Link to={'/reports/jamtlandsk-fagel-flyger-till-afrika-utan-vila'}>
            Jämtländsk fågel flyger till Afrika utan vila
          </Link>
          , 2011-05-24
        </p>
        <ul>
          <li>
            <Anchor href="/file/reports/domherrar-fjallen.pdf">Fler domherrar i fjällen</Anchor>,
            2000-02-28
          </li>
          <li>
            <Anchor href="/file/reports/forandringar-fagellivet.pdf">
              Förändringar i fågellivet kan vara tecken på växthuseffekten
            </Anchor>
            , 2001-05-03
          </li>
        </ul>
        <Divider />
        <h4>Konferensrapporter</h4>
        <ul>
          <li>
            <Anchor href="/file/reports/ringmote-hoor.pdf">Ringmärkarmöte</Anchor>, Höör, 2004
          </li>
          <li>
            <Anchor href="/file/reports/rc-ringmote-goteborg.pdf">
              Ringmärkarcentralens ringmärkarmöte
            </Anchor>
            , Göteborg, 2000
          </li>
          <li>
            <Anchor href="/file/reports/nordic-bird-observatory-conf-1999.pdf">
              Nordic Bird Observatory Conference
            </Anchor>
            , Skagen, 1999
          </li>
        </ul>
        <Divider />
        <h4>Statistik</h4>
        <ul>
          <li>
            <Anchor href="/file/reports/statistik-1988-2018.xlsx">Märkningar 1988 - 2018</Anchor>
          </li>
        </ul>
        <Divider />
        <h4>Återfynd</h4>
        <ul>
          <li>
            <Anchor href="/file/reports/aterfynd-frankrike.pdf">Återfynd i Frankrike</Anchor>,
            2010-11-11
          </li>
          <li>
            <Anchor href="/file/reports/aterfynd-1988-1991.pdf">
              Långdistansåterfynd 1988 - 1991
            </Anchor>
          </li>
        </ul>
        <Divider />
      </article>
      <aside>
        <h4>Årsrapporter</h4>
        <ul>
          {annualReports.map(({ file, size, year }) => (
            <li key={year}>
              <Anchor key={year} href={file}>
                {year}
              </Anchor>
              <span css={{ color: '#999', fontSize: '12px', marginLeft: '10px' }}>{size}</span>
            </li>
          ))}
        </ul>
      </aside>
    </Fragment>
  )
}

export default Overview
