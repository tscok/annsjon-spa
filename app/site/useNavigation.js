import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import LanguageContext, { LANGUAGES } from './LanguageContext'

import { media } from './GlobalStyles'

const ROUTES = {
  fagelskydd: '/iba',
  guide: '/guide',
  projects: '/projects',
  reports: '/reports',
  volunteer: '/volunteer',
  about: '/about',
  contact: '/contact',
}

const MENU = {
  [LANGUAGES.SE]: [
    { route: ROUTES.fagelskydd, label: 'Fågelskydd' },
    { route: ROUTES.guide, label: 'Skådarguide' },
    { route: ROUTES.projects, label: 'Projekt' },
    { route: ROUTES.reports, label: 'Rapporter' },
    { route: ROUTES.volunteer, label: 'Medarbetare' },
    { route: ROUTES.about, label: 'Föreningen' },
    { route: ROUTES.contact, label: 'Kontakt' },
  ],
  [LANGUAGES.EN]: [
    { route: ROUTES.guide, label: "Watcher's guide" },
    { route: ROUTES.volunteer, label: 'Volunteer' },
    { route: ROUTES.about, label: 'About' },
    { route: ROUTES.contact, label: 'Contact' },
  ],
}

const MAIN_MENU = [
  ROUTES.guide,
  ROUTES.projects,
  ROUTES.volunteer,
  ROUTES.about,
  ROUTES.contact,
]

const useNavigation = () => {
  const { currentLanguage, isEnglish } = useContext(LanguageContext)
  const { pathname } = useLocation()

  const filter = ({ route }) => MAIN_MENU.includes(route)

  const items = MENU[currentLanguage]

  return [items, filter]
}

export default useNavigation
