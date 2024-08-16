import { useDictionary } from 'app/i18n/use-dictionary'
import { MediaCardType } from 'app/types'

const guides: MediaCardType<GuideName>[] = [
  {
    body: 'guide.ann',
    id: 'guide-ann',
    media: {
      src: '/images/brushane_steve-dahlfors.jpg',
    },
    name: 'ann',
    title: 'Ånn',
    to: '/guide/ann',
  },
  {
    body: 'guide.handol',
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
    body: 'guide.hogasen',
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
    body: 'guide.storlien',
    id: 'guide-storlien',
    media: {
      src: '/images/dbeckasin_steve-dahlfors.jpg',
    },
    name: 'storlien',
    title: 'Storlien',
    to: '/guide/storlien',
  },
  {
    body: 'guide.storulvan',
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

export type GuideName = 'ann' | 'handol' | 'hogasen' | 'storlien' | 'storulvan'

export function useGuides(excludeName?: GuideName): MediaCardType<GuideName>[] {
  const t = useDictionary('startpage')

  return guides
    .filter(({ name }) => name !== excludeName)
    .map((guide) => ({
      ...guide,
      body: t(guide.body as keyof typeof t),
    }))
}
