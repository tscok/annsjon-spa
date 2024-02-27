import React from 'react'
import { Link } from 'react-router-dom'

import Anchor from '../../components/Anchor'
import Figure from '../../components/Figure'
import Image from '../../components/Image'

import imageBeckasin from '../../../assets/images/old/projects_great-snipe.jpg'
import imageRinging from '../../../assets/images/old/projects_ringing.jpg'
import imageCensus from '../../../assets/images/old/projects_census.jpg'

const Overview = () => (
  <article>
    <h3>Projekt</h3>
    <p>
      Utöver nedanstående standardprojekt genomför vi även holkprojekt om tillgången på personal är
      god.
    </p>
    <hr />
    <h4>Dubbelbeckasinprojektet</h4>
    <Figure caption="Foto: Björn Isaksson">
      <Image source={imageBeckasin} />
    </Figure>
    <p>
      Beståndet av dubbelbeckasin är en av de viktigaste anledningarna till att Ånnsjön- Storlien
      finns med på BirdLife International's lista över Important Bird Areas (IBA). Sedan 2004 har vi
      tillsammans med forskare från Lund bedrivit inventering, radiopejling och nätfångst samt
      märkning med ljusloggers. <Link to="/projects/great-snipe">Läs mer</Link>
    </p>
    <hr />
    <h4>Ringmärkning av tättingar</h4>
    <Figure caption="Foto: Mikael Carlsson">
      <Image source={imageRinging} />
    </Figure>
    <p>
      Sedan starten 1988 har vi bedrivit standardiserad ringmärkning av tättingar i Handöl och Enans
      delta i Ånnsjön. Syftet är att följa populations- förändringar för ett stort antal arter, och
      framför allt ger projektet ett bra mått på häckningsframgången för tex lövsångare, blåhake,
      gulärla, bergfink och sävsparv.
    </p>
    <hr />
    <h4>Fjällrutter</h4>
    <Figure caption="Foto: Malte Busch">
      <Image source={imageCensus} />
    </Figure>
    <p>
      Femton fjällrutter i området Ånnsjön-Storlien inventeras årligen med
      linjetaxerings&shy;metodik. Syftet är att följa populationsutvecklingen hos fågelarter inom
      videbältet och kalfjällsregionen, i första hand arter med sin utbredning begränsad till denna
      region, tex alfågel, fjällpipare, skärsnäppa, kärrsnäppa, fjällabb, fjällripa, dalripa,
      fjällvråk, korp, stenskvätta, snösparv, lappsparv, och ringtrast. Att inventera fjällrutter är
      mycket enkelt, bara man kan läsa kartan!
    </p>
    <ul>
      <li>
        <Anchor href="/file/projects/fjallrutter-kartor.pdf" label="Ruttkartor" />
      </li>
      <li>
        <Anchor href="/file/projects/fjallrutter-metodbeskrivning.pdf" label="Metodbeskrivning" />
      </li>
    </ul>
    <hr />
    <h4>Kvadratrutan</h4>
    <p>
      Kvadratrutan är en halvkvantitativ fågelinventering av ett kvadratiskt område med storleken
      1x1 km. Inventeringsrutorna överensstämmer med "Rikets nät", det svarta rutnät som finns
      inlagt på de flesta topografiska kartor. Med halvkvantitativ menas att det i huvudsak är
      artförekomsten som ska noteras, antalet individer noteras bara i begränsad omfattning.
    </p>
    <ul>
      <li>
        <Anchor href="/file/projects/kvadratrutan-beskrivning.pdf" label="Projektbeskrivning" />
      </li>
      <li>
        <Anchor href="/file/projects/kvadratrutan-omradet.pdf" label="Inventeringsområdet" />
      </li>
    </ul>
    <hr />
    <h4>Myrinventering</h4>
    <p>
      Ett dussintal myrar och våtmarker runt Ånnsjön och Storlien har inventerats varje sommar sedan
      1989. Alla vadare, änder, måsar och andra våtmarksfåglar samt vissa tättingar noteras.
      Grönbena, småspov och silvertärna är vanliga arter på myrarna, och man har goda chanser att
      hitta myrsnäppor på de blötaste partierna.
    </p>
    <hr />
    <h4>Sjöinventering</h4>
    <p>
      Ånnsjön inventeras från båt vid ett eller flera tillfällen för att notera t.ex. lommar,
      sjöorrar, svärtor, alfåglar och andra sjöfåglar som häckar i sjön eller rastar på sin väg upp
      mot ännu frusna fjällsjöar. Ett lagarbete för tre personer där en kör båten, en spanar och
      identifierar och en antecknar.
    </p>
  </article>
)

export default Overview
