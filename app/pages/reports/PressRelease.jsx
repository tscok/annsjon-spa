import React from 'react'

import Figure from '../../components/Figure'
import Image from '../../components/Image'

import imageSource from '../../../assets/images/old/projects_great-snipe.jpg'

const PressRelease = () => {
  return (
    <article>
      <h3>Jämtländsk fågel flyger till Afrika utan&nbsp;vila</h3>
      <p>
        <i>Publicerad 2011-05-24</i>
      </p>
      <Figure caption="Foto: Björn Isaksson">
        <Image alt="Dubbelbeckasiner" source={imageSource} />
      </Figure>
      <p>
        Ånnsjöns fågelstation har i samarbete med forskare från Lunds Universitet avslöjat hittills
        okända vinterkvarter i tropiska Afrika för den gåtfulla dubbelbeckasinen. Studien visar
        också att fåglarna under höstflyttningen flyger 6000 km utan vila under fyra dygn, trots att
        det finns gott om lämpliga rastplatser längs vägen. Resultaten publiceras onsdagen 25 maj i
        den internationella vetenskapliga tidskriften Biology Letters.
      </p>
      <p>
        — Det är en anmärkningsvärd och mycket ovanlig prestation, säger Raymond Klaassen,
        flyttfågelforskare vid Lunds Universitet och huvudförfattare till artikeln.
        <br />— En sådan lång och snabb förflyttning kräver stora och tunga fettdepåer som bränsle,
        vilket fåglar normalt undviker om det finns möjlighet att fylla på förråden längs vägen,
        förklarar Raymond Klaassen.
      </p>
      <p>
        Våren 2009 försåg forskarlaget tio dubbelbeckasiner med små elektroniska ljusmätare (sk
        light level geolocators) som registrerade tidpunkterna för solens upp- och nedgång under ett
        helt år. Efter återfångst av tre dubbelbeckasiner våren 2010 och analys av deras ljusmätare
        kunde man räkna ut var på jorden de varit vid varje tidpunkt. Tekniken med ljusmätare är
        bara några år gammal och ger forskarna helt nya möjligheter att följa individer av relativt
        små fågelarter.
      </p>
      <p>
        — Vi är mycket stolta över att som ideell förening kunna verka i den absoluta
        forskningsfronten, säger Peter Carlsson, ordförande för Ånnsjöns fågelstation.
        <br />— Många duktiga inventerares kartläggning av dubbelbeckasinernas spelplatser runt
        Ånnsjön har lagt grunden till detta spjutspetsprojekt, fortsätter Peter Carlsson.
      </p>
      <p>
        Projektet fortsätter 2011-2012 med utökad märkning och återfångstförsök för att bekräfta
        erhållna resultat samt söka svar på varför dubbelbeckasinerna valt denna spektakulära och
        ovanliga flyttningsstrategi.
      </p>
      <h4>Referens</h4>
      <p>
        Klaassen et al, "Great flights by great snipes: long and fast non-stop migration over benign
        habitats", Biology Letters (2011) VV:1-3 (doi:10.1098/rsbl.2011.0343)
      </p>
      <p>
        <b>Dubbelbeckasinen</b> (Gallinago media) är en i Skandinavien relativt sällsynt vadare som
        numera endast häckar på våta och kalkrika fjällsluttningar. Dubbelbeckasinerna samlas på
        speciella lekplatser nära trädgränsen, och hanarna genomför ett spektakulärt nattligt spel i
        månadsskiftet maj-juni. Arten klassificeras på den globala rödlistan som "missgynnad". Den
        svensk-norska populationen kan på sikt hotas av ett varmare klimat där trädgränsen flyttas
        uppåt. Tidigare häckade dubbelbeckasinen också på låglänta våtmarker i södra och mellersta
        Sverige, men utdikning och jakt anses ha utplånat denna population. I Baltikum, Polen och
        Ryssland häckar arten fortfarande längs sjöar och flodstränder.
      </p>
      <p>
        <b>Ånnsjöns fågelstation</b> är en ideell förening som bedriver standardiserad
        miljöövervakning och avancerad ornitologisk amatörforskning i västra Jämtlands fjälltrakter
        sedan 1989. Fågelstationen har en internationell prägel då många utländska ornitologer varje
        sommar söker sig till byn Handöl för att delta i arbetet. Verksamheten finansieras av
        medlemsavgifter, statliga bidrag och anslag från forskningsfonder.
      </p>
    </article>
  )
}

export default PressRelease