import { useDictionary } from 'app/i18n/use-dictionary'

type Guide = {
  body: string
  id: string
  media: {
    position?: string
    src: string
  }
  name: GuideName
  title: string
  to: string
}

export type GuideName = 'ann' | 'handol' | 'hogasen' | 'storlien' | 'storulvan'

export function useGuides(excludeName?: GuideName) {
  const t = useDictionary('startpage')

  const guides: Guide[] = [
    {
      body: t('guide.ann'),
      id: 'guide-ann',
      media: {
        src: '/images/brushane_steve-dahlfors.jpg',
      },
      name: 'ann',
      title: 'Ånn',
      to: '/guide/ann',
    },
    {
      body: t('guide.handol'),
      id: 'guide-handol',
      media: {
        position: '50% 10%',
        src: '/images/bergfink_steve-dahlfors.jpg',
      },
      name: 'handol',
      title: 'Handöl',
      to: '/guide/handol',
    },
    {
      body: t('guide.hogasen'),
      id: 'guide-hogasen',
      media: {
        position: '50% 70%',
        src: '/images/dbeckasin3_steve-dahlfors.jpg',
      },
      name: 'hogasen',
      title: 'Högåsen',
      to: '/guide/hogasen',
    },
    {
      body: t('guide.storlien'),
      id: 'guide-storlien',
      media: {
        src: '/images/dbeckasin_steve-dahlfors.jpg',
      },
      name: 'storlien',
      title: 'Storlien',
      to: '/guide/storlien',
    },
    {
      body: t('guide.storulvan'),
      id: 'guide-storulvan',
      media: {
        position: '50% 30%',
        src: '/images/blahake_steve-dahlfors.jpg',
      },
      name: 'storulvan',
      title: 'Storulvån',
      to: '/guide/storulvan',
    },
  ]

  return guides.filter((guide) => guide.name !== excludeName)
}
