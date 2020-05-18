import React, { useContext } from 'react'
import purebem from 'purebem'

import getText from '../../assets/js/data/mygettext'
import LanguageContext from '../site/LanguageContext'

const block = purebem.of('projects')

const Projects = () => {
  const { language } = useContext(LanguageContext)

  return (
    <section className={block()}>
      <div className="container">
        <h6 className={block('header')}>{getText('projects_header')}</h6>
        <div className="row">
          <div className={`${block('brief')} one-third column`}>
            <div className={block('placeholder', ['great-snipe'])}></div>
            <h5 className={block('title')}>{getText('projects_title-great-snipe')}</h5>
            <p className={block('body')}>{getText('projects_body-great-snipe')}</p>
          </div>
          <div className={`${block('brief')} one-third column`}>
            <div className={block('placeholder', ['census'])}></div>
            <h5 className={block('title')}>{getText('projects_title-census')}</h5>
            <p className={block('body')}>{getText('projects_body-census')}</p>
          </div>
          <div className={`${block('brief')} one-third column`}>
            <div className={block('placeholder', ['ringing'])}></div>
            <h5 className={block('title')}>{getText('projects_title-ringing')}</h5>
            <p className={block('body')}>{getText('projects_body-ringing')}</p>
          </div>
        </div>
        {language === 'se' && (
          <div className={block('actions')}>
            <a className={`${block('button')} button button-primary`} href="#projects">
              {getText('projects_button')}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
