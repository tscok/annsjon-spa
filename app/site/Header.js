import React, { useState } from 'react'
import RiotControl from 'riotcontrol'
import RiotRoute from 'riot-route'
import purebem from 'purebem'

const block = purebem.of('site-header')

const SiteHeader = () => {
  const [isExpaned, setExpanded] = useState(false)
  const [links, setLinks] = useState([])
  const [route, setRoute] = useState('')

  const onToggleExpanded = () => setExpanded(state => !state)

  const onReroute = (event, href) => {
    event.preventDefault()
    RiotRoute(href)
    setExpanded(false)
  }

  RiotControl.on('ROUTE', newRoute => {
    setRoute(newRoute)
    setExpanded(false)
  })

  RiotControl.on('SITE_NAVIGATION_HEADER', setLinks)

  return (
    <header className={block()}>
      <div className="container">
        <div className="row">
          <a href="#" className={block('logo')}>
            Ånnsjöns fågelstation
          </a>
          <div id="burger" className={block('burger')} onClick={onToggleExpanded}>
            <span className={block('burger-bar', { close: isExpaned })}></span>
          </div>
        </div>
        <nav className={block('menu', { open: isExpaned })}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              className={block('link', { active: href === route })}
              href={`#${href}`}
              onClick={event => onReroute(event, href)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default SiteHeader
