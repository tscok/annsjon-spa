import { useTranslation } from '../i18n'
import { Route } from '../types'

export const useRoutes = (): Route[] => {
  const t = useTranslation('pages')

  return [
    {
      name: t('home'),
      path: '/',
    },
    {
      name: t('iba'),
      path: '/iba',
    },
    {
      name: t('guide'),
      path: '/guide',
      children: [
        { name: 'Handöl', path: '/guide/handol' },
        { name: 'Högåsen', path: '/guide/hogasen' },
        { name: 'Storlien', path: '/guide/storlien' },
        { name: 'Storulvån', path: '/guide/storulvan' },
        { name: 'Ånn', path: '/guide/ann' },
      ],
    },
    {
      name: t('projects'),
      path: '/projects',
      children: [
        {
          name: t('projects.great-snipe'),
          path: '/projects/great-snipe',
          children: [
            {
              name: t('projects.great-snipe.background'),
              path: '/projects/great-snipe/history',
            },
          ],
        },
      ],
    },
    {
      name: t('reports'),
      path: '/reports',
      children: [
        { name: t('reports.press-release'), path: '/reports/press-release' },
      ],
    },
    {
      name: t('volunteer'),
      path: '/volunteer',
      children: [
        { name: t('volunteer.information'), path: '/volunteer/information' },
        { name: t('volunteer.application'), path: '/volunteer/application' },
      ],
    },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
  ]
}
