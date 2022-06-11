import React, { Fragment, useContext } from 'react'

import Anchor from 'app/components/Anchor'
import Email from 'app/components/Email'

import Address from 'app/pages/contact/Address'
import LanguageContext from 'app/site/LanguageContext'
import { ULLA } from 'app/utils/contacts'

const ANCHOR = {
  travel: <Anchor href="http://www.sj.se" label="SJ.se" />,
  turistbyra: (
    <Anchor href="http://www.storlienturistbyra.com/handla.html" label="Storlien Turistbyrå" />
  ),
}

const Information = () => {
  const { isEnglish } = useContext(LanguageContext)

  return (
    <article>
      {isEnglish ? (
        <Fragment>
          <h3>Questions &amp; Answers</h3>
          <ul>
            <li>
              <a href="#observatory">About the Observatory</a>
            </li>
            <li>
              <a href="#travel">Travel &amp; directions</a>
            </li>
            <li>
              <a href="#accomodation">Accommodation</a>
            </li>
            <li>
              <a href="#miscellaneous">Miscellaneous</a>
            </li>
          </ul>
          <hr />
          <h4 id="observatory">About the Observatory</h4>
          <p>
            <b>Where is Lake Ånnsjön Bird Observatory?</b>
            <br />
            The Observatory is situated in the tiny village Handöl in the province Jämtland in
            mid-western Sweden, not far from the Norwegian border. Approximate coordinates are
            63°15’N 12°27’E. You will find the Observatory premises just next to the Handöl Inn and
            camping cottages in the center of the village.
          </p>
          <p>
            <b>What is the aim of the bird observatory?</b>
            <br />
            The long-term goal for our observatory is to document the existing bird populations and
            their fluctuations in our study area as well as possible, given available resources.
            This information may be used for many purposes, e.g. environmental protection or climate
            research. We try to combine rigorous scientific work with a friendly and welcoming
            atmosphere for all our volunteers.
          </p>
          <p>
            <b>What is your field season?</b>
            <br />
            Our field season is June, July, and August. In June we focus on various census projects,
            and in July and August we do mist netting and ringing (banding) of passerines. Some
            years, specific projects may start in May or extend into September.
          </p>
          <p>
            <b>What bird species do you ring?</b>
            <br />
            We mainly ring small passerines such as Willow Warbler, Reed bunting, Brambling,
            Bluethroat, Siskin, Redpoll, and Yellow Wagtail. In our approx 100 nest boxes we ring
            Pied Flycatcher, Great tit, and Blue tit. Occasionally we may ring exclusive species
            such as Tengmalm’s Owl in some of our large nest boxes or Red-necked Phalaropes in the
            delta, and in a specific project some 10-20 Great Snipes have been ringed annually in
            recent years.
          </p>
          <p>
            <b>When is the best time to visit Lake Ånnsjön?</b>
            <br />
            For general bird watching the most vibrant time of the year is mid-June. At this time
            snow and ice is definitely gone from lower altitudes, and waders and passerines are
            displaying and singing most intensely. At higher altitudes, the breeding season is even
            more compressed and late June may be as good a choice.
          </p>
          <p>
            <b>When is the best time to participate in the activities at the Observatory?</b>
            <br />
            We need volunteers from June 1 to August 31, and some years in May and September too.
            The best time for census work and general bird watching is mid-June. For mist netting
            and ringing, July and August. The peak season for ringing is the last two weeks in July
            and the first two weeks in August. During this time we try to run ringing at two sites
            in parallel.
          </p>
          <p>
            <b>How much do you pay?</b>
            <br />
            Lake Ånnsjön Bird Observatory is a non-profit organization run entirely by volunteers.
            No salaries are paid. In some specific projects, we may have an opportunity to reimburse
            expenses such as train tickets. Accommodation is free for all volunteers.
          </p>
          <h4 id="travel">Travel &amp; directions</h4>
          <p>
            <b>How do I travel to Lake Ånnsjön Bird Observatory?</b>
            <br />
            We recommend train, see {ANCHOR.travel} (available in English), from Stockholm or
            Gothenburg towards the ski resort Storlien. The nearest train stop is Enafors, about 7
            km from Handöl. We usually arrange so that someone already present at the Observatory
            picks you up in Enafors by car.
          </p>

          <p>
            By car you follow highway E14 from Sundsvall (330 km), Östersund (150 km) or Trondheim
            (130 km), and turn south in Enafors. Driving from Stockholm (670 km) is generally not
            recommended, but one viable alternative may be to go by train to Östersund or Åre and
            pick up a rental car for the remaining distance.
          </p>

          <p>
            Last but not least, you can book a flight to Trondheim in Norway and then catch a train
            to Enafors, where we can arrange to pick you up.
          </p>
          <h4 id="accomodation">Accommodation</h4>
          <p>
            <b>What about lodging?</b>
            <br />
            The Observatory offers free accomodation for all volunteers participating in our
            activities. We have four small bedrooms with two beds each, and a few more beds are
            available if needed. The Observatory building has a fully equipped kitchen (including
            fridge and freezer, electrical stove and oven, microwave ovens), and a bathroom with hot
            shower. There is a low-cost laundry facility in the village for long-term visitors. You
            need to bring your own towel(s) and bed sheets. Pillows and blankets are available.
          </p>
          <p>
            <b>What is the weather like in Handöl?</b>
            <br />
            Handöl is situated in the Scandinavian mountain range, and the general climate is
            therefore rather cool (due to the altitude) and wet (due to the Atlantic rainfalls
            hitting the mountain range). The typical summer temperature is around 10°C, but may span
            0°C – 25°C. Eastern high-pressure weather systems usually give hot and sunny weather for
            a couple of weeks every summer. Cold weather is most common in early June, and hot
            weather is most common in mid-July.
          </p>
          <p>
            <b>What do I need to bring?</b>
            <br />
            Bed sheets and towel(s) are essential. High rubber boots are highly recommended for the
            census projects in June and are often useful during the ringing season as well, although
            ordinary hiking boots will do for most activities. A rain proof outer layer, long
            underpants, a hat, gloves, and a warm sweater are often needed at any time of the
            season. However, don’t forget to pack swimming gears in case the weather turns hot
            during your visit! And of course, bring your binoculars and other personal birding
            equipment.
          </p>
          <p>
            <b>What about eating and cooking?</b>
            <br />
            We recommend that everyone staying at the Observatory at any given time coordinate
            eating and cooking. This is most practical given the available cooking facilities, and
            it is also more fun to cook and eat together! Coordinated cooking also facilitates the
            coordination of trips to the super-market in Storlien.
          </p>
          <p>
            <b>Is there a grocery store in Handöl?</b>
            <br />
            The nearest grocery store is the super-market in Storlien, 25 km from Handöl. The only
            practical way to go there is by car. Usually there is at least one car available at the
            Observatory at any time. We will make some arrangement if this is not the case.
          </p>
          <p>
            <b>Is there a pub or restaurant nearby?</b>
          </p>
          <ul>
            <li>
              Hanriis Café, open from early June to late September, serves coffee/tea and cakes.
            </li>
            <li>
              Enaforsholm Fjällgård, close to Enafors trainstation, has a restaurant open all year
              round. Book ahead for dinner reservations.
            </li>
            <li>
              During summer the tourist station Storulvån some 15 km up in the mountains is open,
              and is known to have a very good but somewhat pricy restaurant.
            </li>
            <li>
              In the village Storlien, 25 km away, there is a small restaurant and pub as well as a
              burger place by the train station.
            </li>
          </ul>
          <p>
            If you plan for a beer, please designate a driver for the trip back as Swedish
            drinking-and-driving laws are very strict!
          </p>
          <h4 id="miscellaneous">Miscellaneous</h4>
          <p>
            <b>What currency / cards are accepted in Sweden?</b>
            <br />
            The official currency is still the Swedish crown (100 SEK ~ 9 Euro). Most shops and
            restaurants are happy to accept VISA or Mastercard, some may accept AmEx. The
            super-market in Storlien and some other local shops also accept the Norwegian crown
            (NOK) and Norwegian debit cards as most of its customers are Norwegians (who find the
            Swedish prices much lower). The nearest ATM is in Duved, 40 km east of Handöl.
          </p>
          <p>
            <b>How bad are the mosquitoes?</b>
            <br />
            During the summer, the mountain region is well-known for having a lot of mosquitoes,
            which of course is fortunate for all insectivorous birds breeding here! To
            bird-watchers, the mosquitoes can be really annoying from time to time and cause itching
            and one or two sleepless nights, but are harmless in terms of diseases. We recommend the
            use of a common insect repellant, and long sleeves and trousers. Insect repellant in
            various forms are available at local stores, and the brand name “Mygga” (mosquito in
            Swedish) is a good buy. The mosquitoes appear around June 10, peak in early July and are
            largely gone in late August.
          </p>
          <p>
            <b>What other activities are available in the area?</b>
            <br />
            The pristine mountain areas next to Lake Ånnsjön are very popular for hiking in both
            summer and winter. The tourist station Storulvån is the central starting point for many
            hiking tours as it is easily accessible by both train and car. Some 50 km east of Lake
            Ånnsjön is the major ski resort Åre, once a candidate city for the winter Olympics and
            in 2006 a successful host of the downhill skiing world championship.
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <h3>Frågor &amp; Svar</h3>
          <ul>
            <li>
              <a href="#travel">Vägbeskrivning</a>
            </li>
            <li>
              <a href="#accomodation">Logi</a>
            </li>
            <li>
              <a href="#shopping">Mat och ekonomi</a>
            </li>
            <li>
              <a href="#connected">Kontakt med omvärlden</a>
            </li>
            <li>
              <a href="#packing">Vad ska jag ta med?</a>
            </li>
          </ul>
          <hr />
          <h4 id="travel">Vägbeskrivning</h4>
          <p>
            <b>Hur tar jag mig till Ånnsjöns fågelstation?</b>
            <br />
            Vi rekommenderar tåg, {ANCHOR.travel}, från Stockholm eller Göteborg mot skidorten
            Storlien. Den närmsta tågstationen är Enafors, ca 7 kilometer från Handöl. Vanligtvis
            ser vi till att någon som redan är på fågelstationen hämtar dig med bil (se nedan).
          </p>
          <p>
            Om du reser med bil följer du E14 från Sundsvall (ca 30 mil), Östersund (15 mil) eller
            Trondheim (13 mil) och tar av söderut vid Enafors. Vi brukar inte rekommendera att köra
            från Stockholm (ca 70 mil), ett bättre alternativ är då att åka tåg till Östersund eller
            Åre och hyra en bil för den återstående distansen.
          </p>
          <p>
            <b>Hämtning vid Enafors tågstation</b>
            <br />
            Vill du bli hämtad eller lämnad vi tågstationen bör du kontakta{' '}
            <Email to={ULLA.email} /> så vidarebefordrar hon detta till personalen på
            fågelstationen. Har du möjlighet att välja tidpunkt för ankomst eller avfärd så ber vi
            dig att välja eftermiddag/kväll eftersom personalen oftast är upptagen med ringmärkning
            på morgon/förmiddag. Har du <i>inte</i> möjlighet att välja ber vi dig att i god tid
            meddela detta till Ulla.
          </p>
          <h4 id="accomodation">Logi</h4>
          <p>
            På stationen har vi fem sovrum med två bäddar i varje rum. Det finns dusch/wc och ett
            välutrustat kök med spis/ugn, två microvågsugnar, två kylskåp och en mindre frys. Det
            finns varken diskmaskin eller tvättmaskin(!)
          </p>
          <p>
            En gemensamhetsanläggning finns i Handöl där man för en låg kostnad kan låna
            tvättmaskin. Det finns täcken och kuddar men du måste ta med sängkläder och handdukar.
            Alla som arbetar på fågelstationen har gratis logi.
          </p>
          <h4 id="shopping">Mat och ekonomi</h4>
          <p>
            Stationen erbjuder ett bassortiment (ris, pasta, mjöl, socker, kryddor, tepåsar,
            tomatkonserver, etc.) som får användas av stationspersonalen. Övriga matvaror inhandlar
            du själv eller tas med hemifrån.
          </p>
          <p>
            När du anländer till stationen är det bra om du har med dig en del matvaror (t.ex.
            frukostmat, frukt, etc.) som du kan behöva innan du får tillfälle att åka till
            mataffären. Coop finns i Storlien och Eurocash i Storvallen. Vanligtvis finns en bil
            tillgänglig på stationen så att turer till Storvallen eller Storlien kan anordnas för
            proviantering, någon gång i veckan.
          </p>
          <p>Se {ANCHOR.turistbyra} för information om matvarubutiker och öppettider.</p>
          <p>
            Bankomat och bank saknas i Storlien men på Coop kan du använda de flesta
            betalningskorten.
          </p>
          <h4 id="connected">Kontakt med omvärlden</h4>
          <p>
            På stationen har vi trådlöst bredband och en stationsdator. Det finns även en radio men
            ingen TV. Om någon vill höra av sig till dig medan du är på fågelstationen så är
            adressen:
          </p>
          <Address />
          <br />
          <h4 id="packing">Vad ska jag ta med?</h4>
          <ul>
            <li>sänglinne</li>
            <li>hygienartiklar</li>
            <li>handduk</li>
            <li>gummistövlar</li>
            <li>regnkläder</li>
            <li>ev. badkläder</li>
            <li>kikare / kamera</li>
            <li>myggmedel</li>
          </ul>
          <p>
            Även om det är sommar kan det vara bra att ta med varma kläder och plagg som är bra
            skydd mot sol och mygg!
          </p>
        </Fragment>
      )}
    </article>
  )
}

export default Information
