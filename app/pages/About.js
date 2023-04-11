import React, { useContext } from 'react'

import Email from 'app/components/Email'
import { INFO } from 'app/utils/contacts'
import DefinitionList, { Definition } from '../components/DefinitionList'
import Figure from '../components/Figure'
import Image from '../components/Image'
import Page from '../components/Page'
import LanguageContext from '../site/LanguageContext'

import imageSource from '../../assets/images/tshirt2016.jpg'

const About = () => {
  const { isEnglish } = useContext(LanguageContext)

  return (
    <Page>
      {isEnglish ? (
        <article>
          <h3>About us</h3>
          <p>
            Lake Ånnsjön Bird Observatory is a non-profit organisation working for a better
            understanding about the birdlife in western Jämtland County. The lake and its
            surroundings are breeding grounds for species exclusive to the Scandinavian mountain
            range and includes Great snipe, Dotterel and Bluethroat.
          </p>
          <p>
            Since we started, in 1988, bird enthusiasts from a great part of Europe have visted the
            observatory in Handöl, combining their interest for birds and a vacation in a unique
            environment. We have even attracted visitors from Australia and the Americas.
          </p>
          <p>
            Each summer we conduct census projects around the lake to study the occurrence of
            seabirds and waders on mires, wetlands and mountains in the region. Close to the village
            of Handöl and in the Enan river delta we annually ring 2000-4000 passerines.
          </p>
          <p>
            Combined the census and ringing projects allow us to follow some sixty species every
            year. Our survey area is the edge of the mountain range and changes to the spreading of
            many species are easily discovered in this marginal zone. Our collected data can be used
            to explain the effects of climate changes or for studying specific species.
          </p>
          <p>
            The results are published in a yearly special edition of "Fåglar i Jämtland-Härjedalen"
            and continuously on this website.
          </p>
        </article>
      ) : (
        <article>
          <h3>Om föreningen</h3>
          <p>
            Ånnsjöns fågelstation är en ideell förening som arbetar för ökad kunskap om fågellivet i
            västra Jämtland. Vid Ånnsjön hittar man häckningsplatser för exklusiva fjällfåglar som
            dubbelbeckasin, fjällpipare och blåhake.
          </p>
          <p>
            Sedan starten 1988 har många besökt fågelstationen i Handöl för att kombinera sitt
            fågelintresse med en semesterresa till en unik miljö. Vi är särskilt glada för att varje
            år locka många utländska besökare från stora delar av Europa.
          </p>
          <p>
            Varje sommar inventerar vi förekomsten av sjöfåglar och vadare på myrar, våtmarker och
            fjällområden i regionen. I närheten av Handöl och i Enans delta ringmärker vi årligen
            2000 - 4000 småfåglar.
          </p>
          <p>
            Genom inventeringar och ringmärkning följer vi årligen ett sextiotal fågelarter. Vårt
            undersökningsområde ligger i kanten av fjällkedjan, och förändringar i utbredning hos
            många arter upptäcks lätt i denna gränszon. Våra insamlade data kan användas för att
            bättre förstå effekter av klimatförändringar, eller för specialstudier av enskilda
            arter.
          </p>
          <p>
            Resultatet från arbetet presenteras årligen i ett specialnummer av Fåglar i
            Jämtland-Härjedalen samt fortlöpande här på hemsidan.
          </p>

          <hr />
          <h4>Köp vår T-shirt</h4>
          <Figure caption="Våra tröjor finns även i vinrött och antracit (mörkgrå).">
            <Image source={imageSource} />
          </Figure>
          <h5>Stöd vårt arbete genom att köpa en tröja!</h5>
          <p>T-shirts kan beställas genom att skicka e-post med adress och önskemål om antal, färg och storlek till <Email to={INFO.email} />. När vi bekräftat din beställning betalar du in summa + frakt till plusgiro 85 45 51-9.</p>
          <p>Observera att leveranstiden för tröjor ibland kan vara lång, särskilt utanför sommarsäsongen. Intäkterna från försäljningen går oavkortat till fågelstationens verksamhet.</p>
          <DefinitionList columns="150px auto">
            <Definition term="Medlemspris">180 kr vuxenstorlek, 150 kr barnstorlek</Definition>
            <Definition term="Frakt & porto">80 kr/tröja</Definition>
            <Definition term="Storlekar">
              Barnstorlek<sup>1</sup> - XXXXL
            </Definition>
            <Definition term="Färger">
              Antracit (mörkgrå), Vinröd och Mörkblå (se bilden ovan)
            </Definition>
          </DefinitionList>
          <p>
            <i>
              <sup>1</sup>Kontakta oss angående vilken barnstorlek du är intresserad av så kan vi
              kolla om den finns i lager.
            </i>
          </p>

          <hr />
          <h4>Medlemsavgift</h4>
          <p>Ett stort tack till alla som stödjer Ånnsjöns fågelstation ekonomiskt!</p>
          <DefinitionList columns="150px auto">
            <Definition term="Privatperson">150 kr</Definition>
            <Definition term="Organisation">500 kr</Definition>
          </DefinitionList>
          <p>Inbetalning sker på Plusgiro 85 45 51 -9</p>
        </article>
      )}
    </Page>
  )
}

export default About
