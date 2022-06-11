import React from 'react'

import Anchor from 'app/components/Anchor'
import DefinitionList, { Definition } from 'app/components/DefinitionList'
import Email from 'app/components/Email'
import Page from 'app/components/Page'

const OpenHouse = () => (
  <Page>
    <article>
      <h3>Ånnsjödagen - 1 juni 2019</h3>
      <p>
        Ta med dina vänner till Ånnsjön när fågellivet är som mest sprudlande. Vi hjälper till med
        artbestämningen vid Ånnsjöns fågeltorn och gömslen under morgontimmarna, bjuder på
        bildvisning under kvällen och guidar er till en dubbelbeckasinlek vid midnatt.
      </p>
      <h4>Program</h4>
      <DefinitionList columns="100px auto" gap="20px">
        <Definition term="07.00 – 11.00">
          <b>Fågelskådning i Ånn</b>
          <br />
          Utgångspunkt Ånns station. Följ markerade leder. Kom när det passar Dig! Vi har guider i
          tornen som kan informera och hjälpa till med artbestämning av fåglarna. Det finns även
          guider på fågelstationens tak, som har en utkiksplattform.
        </Definition>
        <Definition term="13.00 - 14.00">
          <b>Årsmöte</b>
          <br />
          Styrelsen i föreningen håller årsmöte. Medlemmar i föreningen och allmänheten är välkomna
          att att delta.
        </Definition>
        <Definition term="14.00 - 18.00">
          <b>Öppet hus på fågelstationen i Handöl</b>
          <br />
          Välkommen att besöka fågelstationen för att prata om fåglar, verksamheten i området eller
          gå vår tipsrunda. Vi bjuder på fika.
        </Definition>
        <Definition term="18.00">
          <b>Middag på Enaforsholms fjällgård</b>
          <br />
          Middag för de som önskar på Enaforsholm. Priset är 150 kr/person (135 kr för medlemmar i
          föreningen). Föranmälan under dagen till fågelstationens personal eller på tel 070 - 528
          40 21. Efter middagen bildvisning och genomgång av tipsrundan.
        </Definition>
        <Definition term="22.00 – 01.00">
          <b>Nattexkursion till dubbelbeckasinspel</b>
          <br />
          Den överlägset största fågelattraktionen i ett internationellt perspektiv är de spelande
          dubbelbeckasinerna. Det hör till det märkligste man kan uppleva i fågelväg. Missa inte
          tillfället att bli guidad till rätt utkikspunkt! En värdig avslutning på en innehållsrik
          dag.
        </Definition>
      </DefinitionList>
      <p>
        Föranmälningar och upplysningar, Thomas Holmberg 073 - 058 36 30. Vi samlas på parkeringen
        vid Enaforsholm kl. 22 för gemensam avfärd mot dubbelbeckasinleken. Spelplatsen är belägen
        ca 2,5 kilometer upp på fjället, så ta på vandringskängorna!
      </p>
      <h4>Övernattning</h4>
      <p>
        Eftersom dubbelbeckasinspelet sker nattetid kan det var en god idé att ordna med
        övernattning. Vi kan tipsa om följande:
      </p>
      <ul>
        <li>
          <Anchor href="http://campann.se/" label="Camp Ånn" />, tel. 070 - 209 02 31
        </li>
        <li>
          <Anchor href="http://www.enaforsholm.se/" label="Enaforsholm Fjällgård" />, tel. 0647 -
          730 26 eller 070 - 527 30 26
        </li>
        <li>
          Jämtåsen, <Email to="fam.jamting@hotmail.com" /> tel. 0647 - 710 94 eller 070 - 646 11 30
        </li>
        <li>
          <Anchor href="http://www.storliensfjallgard.se/" label="STF Storliens Fjällgård" /> tel.
          0647 - 700 58
        </li>
      </ul>
    </article>
  </Page>
)

export default OpenHouse
