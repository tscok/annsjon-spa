import React, { Fragment, useContext } from 'react'

import DefinitionList, { Definition } from 'app/components/DefinitionList'
import Figure from 'app/components/Figure'
import Image from 'app/components/Image'

import LanguageContext from 'app/site/LanguageContext'
import useText, { interpolate } from 'app/utils/useText'

import image1Source from '../../../assets/images/dbeckasin3_steve-dahlfors.jpg'
import image2Source from '../../../assets/images/dbeckasin2_steve-dahlfors.jpg'

import HogasenMap from './HogasenMap'

const species = {
  se: { $1: 'Dubbelbeckasin' },
  en: { $1: 'Great snipe' },
}

const Hogasen = () => {
  const { isEnglish } = useContext(LanguageContext)

  return (
    <Fragment>
      <article>
        <h3>Högåsen</h3>
        {isEnglish ? (
          <Fragment>
            <h4>{species.en.$1} lek by Lake Ånnsjön</h4>
            <Figure caption={`Playing ${species.en.$1}. Photo: Steve Dahlfors`}>
              <Image source={image1Source} />
            </Figure>
            <p>
              <b>When?</b>
              <br />
              The {species.en.$1} arrives in Ånnsjöfjällen in mid-May, and starts playing
              immediately. The playing goes on with high intensity some week into June. After that,
              most females are mated and the playing slows down. Occasional active males can,
              however, be heard in early July. {species.en.$1}s are nocturnal and plays mostly
              during the darkest hours of the night, approx. 11 pm – 2 am. Single stanzas can be
              heard already at 8-9 pm and some individuals continue playing until 4-5 am.
            </p>
            <p>
              <b>Where?</b>
              <br />
              For those of you who want to enjoy the lek, we recommend visiting the top of the low
              mountain Högåsen, just north of Enafors. This lek is one of the biggest we know, with
              20&#8209;30 playing males. The playground is well suited for photography as it is free
              from shrubs, and the birds are often seen openly on the tufts. Högåsen also offers a
              nice panoramic view of the surrounding mountain world.
            </p>
            <p>
              <b>How?</b>
              <br />
              You reach Högåsen via the paved <em>Blue trail</em> which starts north of Enafors
              railway station. Alternatively, you step on the trail at the switchyard about 1 km
              northeast of Enafors (cross the large power line, find blue markings under the small
              power line). The blue trail ends at the rest cabin <em>Grand Hotel</em> at the top of
              Högåsen, after 2-3 km of moderate uphill. From the Grand Hotel cabin you walk 400 m
              due east. The playground is located on the easternmost part of Högåsen's top plateau.
            </p>
            <p>
              <b>Remember!</b> Be considerate of both {species.en.$1}s and other bird watchers when
              you visit the lek.
            </p>
            <Figure caption={`${species.en.$1}. Photo: Steve Dahlfors`}>
              <Image source={image2Source} />
            </Figure>
            <p>
              Occasional quiet visitors can get relatively close to the birds (about 20-30 m) during
              the most intense part, but earlier in the evening you should keep a greater distance
              (50–100 m) to the birds to allow them to gather without disturbance. Groups of
              spectators should also keep a greater distance so as not to hamper the lek. When we go
              on our excursions we do not bring forth more than eight spectators at a time.
            </p>
            <b>Tips!</b>
            <br />
            <ul>
              <li>
                Take off a layer of clothes before you start the walk up to Grand Hotel, then put it
                back on as soon as you get up.
              </li>
              <li>
                Feel free to bring a seat pad or equivalent and sit down when you have located the
                playing birds. If you are lucky, the birds will gradually come closer.
              </li>
            </ul>
            <h4>Map of the area</h4>
            <DefinitionList columns="50px auto">
              <Definition term="A">Parking at switchyard</Definition>
              <Definition term="B">Rest cabin "Grand Hotel"</Definition>
              <Definition term="C">Observation spot Högåsen</Definition>
              <Definition term="D">Approx. center of lek</Definition>
              <Definition term="T">Telecom pylon</Definition>
            </DefinitionList>
            <Figure>
              <HogasenMap />
            </Figure>
            <p>
              Change the map display mode to "Satellite" for more details. You can also zoom to
              easier to see the terrain. Click on the markers to see what they mark.
            </p>
          </Fragment>
        ) : (
          <Fragment>
            <h4>{species.se.$1}spel vid Ånnsjön</h4>
            <Figure caption={`Spelande ${species.se.$1}. Foto: Steve Dahlfors`}>
              <Image source={image1Source} />
            </Figure>
            <p>
              <b>När?</b>
              <br />
              {species.se.$1}erna anländer till Ånnsjöfjällen i mitten av maj, och börjar omedelbart
              att spela. Spelet pågår med hög intensitet någon vecka in i juni. Därefter är de
              flesta honor parade och spelet mattas av. Enstaka spelande hanar kan dock höras i
              början av juli. {species.se.$1}en är nattaktiv och spelar som mest under nattens
              mörkaste timmar, ca 23–02. Enstaka strofer kan höras redan vid 20–21 och en del
              individer fortsätter spela framåt 04–05.
            </p>
            <p>
              <b>Var?</b>
              <br />
              För dig som vill njuta av spelandet rekommenderar vi att besöka toppen av lågfjället
              Högåsen, precis norr om Enafors. Denna lek är en av de största vi känner till, med
              20&#8209;30 spelande hanar. Spelplatsen lämpar sig väl för fotografering eftersom den
              är fri från buskar, och fåglarna ofta ses öppet på tuvorna. Högåsen erbjuder också en
              fin panoramavy över omgivande fjällvärld.
            </p>
            <p>
              <b>Hur?</b>
              <br />
              Högåsen når du via den spångade leden "Blå spåret" som utgår norr om Enafors jvstn.
              Alternativt kliver du på leden vid ställverket ca 1 km nordost om Enafors (korsa stora
              kraftledningen, hitta blå markeringar under lilla kraftledningen). Blå spåret slutar
              vid raststugan "Grand Hotel" på toppen av Högåsen, efter 2-3 km måttlig uppförsbacke.
              Från "Grand Hotel" går du 400 m rakt österut. Spelplatsen ligger på den östligaste
              delen av Högåsens topp-platå.
            </p>
            <p>
              <b>Kom ihåg!</b> Visa hänsyn mot både dubbelbeckasiner och andra fågelskådare när du
              besöker leken.
            </p>
            <Figure caption={`${species.en.$1}. Foto: Steve Dahlfors`}>
              <Image source={image2Source} />
            </Figure>
            <p>
              Enstaka stillsamma besökare kan komma fåglarna relativt nära (ca 20–30 m) under den
              mest intensiva delen av spelet, men tidigare på kvällen bör man hålla större avstånd
              (50–100 m) till fåglarna för att låta dem samlas utan störning. Grupper av skådare bör
              också hålla ett större avstånd för att inte hämma spelet. Vid våra exkursioner går vi
              inte fram med fler än åtta besökare åt gången.
            </p>
            <b>Tips!</b>
            <br />
            <ul>
              <li>
                Lätta på klädseln innan du påbörjar vandringen upp till Grand Hotel, och ta på
                extratröjan direkt när du kommer upp.
              </li>
              <li>
                Ta gärna med ett sittunderlag eller motsvarande och slå dig ned när du lokaliserat
                de spelande fåglarna. Har du tur kommer fåglarna successivt närmare.
              </li>
            </ul>
            <h4>Karta över området</h4>
            <DefinitionList columns="50px auto">
              <Definition term="A">Parkering vid ställverk</Definition>
              <Definition term="B">Raststugan "Grand Hotel"</Definition>
              <Definition term="C">Obsplats Högåsen</Definition>
              <Definition term="D">HOGAS, ungefärlig mittpunkt för spelplatsen</Definition>
              <Definition term="T">Telemast</Definition>
            </DefinitionList>
            <Figure>
              <HogasenMap />
            </Figure>
            <p>
              Byt kartans visningsläge till "Satellit" för mer detaljer. Du kan även zooma för att
              lättare se terrängen. Klicka på markörerna för att se vad de markerar.
            </p>
          </Fragment>
        )}
      </article>
    </Fragment>
  )
}

export default Hogasen
