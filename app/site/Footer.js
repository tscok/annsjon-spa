import React, { useContext } from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'
import LanguageContext from './LanguageContext'
import { getFooterLinks } from './Links'

const block = purebem.of('site-footer')

const LanguageLink = ({ label, onClick }) => (
  <a href="#" className={block('misc-link', ['separator'])} onClick={onClick}>
    {label}
  </a>
)

const SiteFooter = () => {
  const { language, changeLanguage } = useContext(LanguageContext)

  return (
    <footer className={block()}>
      <div className="container">
        <div className="row">
          <a href="#" className={block('logo')}>
            {getText('site_title')}
          </a>
          <nav className={block('links')}>
            {getFooterLinks(language).map(({ href, label }) => (
              <a key={href} className={block('link')} href={`#${href}`}>
                {label}
              </a>
            ))}
          </nav>
        </div>
        <div className="row">
          <p className={block('misc')}>
            {language === 'en' ? (
              <LanguageLink label="Svenska" onClick={() => changeLanguage('se')} />
            ) : (
              <LanguageLink label="English" onClick={() => changeLanguage('en')} />
            )}
            <a href="#cookies" className={block('misc-link')}>
              Cookies
            </a>
            <span className={block('credits')}>
              {getText('credits')}{' '}
              <a href="http://twitter.com/tscok" target="_blank" className={block('misc-link')}>
                Mikael Carlsson
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
