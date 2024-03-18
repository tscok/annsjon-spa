import { useDictionary } from 'app/i18n/use-dictionary'
import { Route } from 'app/types'

export const useRoutes = (): Route[] => {
  const t = useDictionary('pages')

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
            { name: `${t('result')} 2009`, path: '/projects/great-snipe/2009' },
            { name: `${t('result')} 2008`, path: '/projects/great-snipe/2008' },
            { name: `${t('result')} 2007`, path: '/projects/great-snipe/2007' },
            { name: `${t('result')} 2006`, path: '/projects/great-snipe/2006' },
            { name: `${t('result')} 2005`, path: '/projects/great-snipe/2005' },
            { name: `${t('result')} 2004`, path: '/projects/great-snipe/2004' },
            {
              name: t('projects.great-snipe.background'),
              path: '/projects/great-snipe/background',
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
        { name: t('volunteer.mountainfit'), path: '/volunteer/mountainfit' },
        { name: t('volunteer.application'), path: '/volunteer/application' },
        { name: t('volunteer.information'), path: '/volunteer/information' },
      ],
    },
    { name: t('about'), path: '/about' },
    { name: t('contact'), path: '/contact' },
  ]
}
