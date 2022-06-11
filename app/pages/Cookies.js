import React, { useContext } from 'react'

import Page from '../components/Page'
import LanguageContext from '../site/LanguageContext'

const Cookies = () => {
  const { isEnglish } = useContext(LanguageContext)

  return (
    <Page>
      {isEnglish ? (
        <article>
          <h3>About cookies</h3>
          <p>
            A cookie is a small text file stored on your computer. Normally cookies are used to
            enhance user experience of websites, e.g. to adapt a website according to user specific
            needs and choices.
          </p>
          <p>
            A permanent cookie remains on the visitors computer for a fixed time. A session cookie
            is temporarily stored on the computer memory while you are visiting our website. Session
            cookies are removed when you shut down your web browser.
          </p>
          <p>
            Through the browser settings it is possible to deny websites to use cookies, at the cost
            of website performance and user experience.
          </p>
          <h4>Cookies at annsjon.org</h4>
          <p>We use a permanent cookie to store language settings.</p>
        </article>
      ) : (
        <article>
          <h3>Om cookies</h3>
          <p>
            En cookie är en liten textfil som lagras på din dator. Cookies används normalt för att
            förbättra webbplatsen för användaren, till exempel för att kunna anpassa en webbplats
            efter besökarens önskemål och val.
          </p>
          <p>
            En permanent cookie ligger kvar på besökarens dator under en bestämd tid. En
            sessionscookie lagras tillfälligt i datorns minne under tiden en besökare är inne på en
            webbsida. Sessioncookies försvinner när du stänger din webbläsare.
          </p>
          <p>
            Man kan neka användningen av cookies genom att välja vissa inställningar i webbläsaren.
            Att göra det brukar ofta resultera i att webbsidor slutar fungera normalt och även
            starkt begränsa dina valmöjligheter.
          </p>
          <h4>Cookies på annsjon.org</h4>
          <p>Vi använder en permanent cookie för att lagra inställningar för språk.</p>
        </article>
      )}
    </Page>
  )
}

export default Cookies
