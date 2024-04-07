type Guide = {
  body:
    | 'guide.ann'
    | 'guide.handol'
    | 'guide.hogasen'
    | 'guide.storlien'
    | 'guide.storulvan'
  id: string
  media: {
    position?: string
    src: string
  }
  name: GuideName
  route: string
  title: string
}

export type GuideName = 'ann' | 'handol' | 'hogasen' | 'storlien' | 'storulvan'

export const guides: Guide[] = [
  {
    body: 'guide.ann',
    id: 'guide-ann',
    media: {
      src: '/images/brushane_steve-dahlfors.jpg',
    },
    name: 'ann',
    route: '/guide/ann',
    title: 'Ånn',
  },
  {
    body: 'guide.handol',
    id: 'guide-handol',
    media: {
      position: '50% 10%',
      src: '/images/bergfink_steve-dahlfors.jpg',
    },
    name: 'handol',
    route: '/guide/handol',
    title: 'Handöl',
  },
  {
    body: 'guide.hogasen',
    id: 'guide-hogasen',
    media: {
      position: '50% 70%',
      src: '/images/dbeckasin3_steve-dahlfors.jpg',
    },
    name: 'hogasen',
    route: '/guide/hogasen',
    title: 'Högåsen',
  },
  {
    body: 'guide.storlien',
    id: 'guide-storlien',
    media: {
      src: '/images/dbeckasin_steve-dahlfors.jpg',
    },
    name: 'storlien',
    route: '/guide/storlien',
    title: 'Storlien',
  },
  {
    body: 'guide.storulvan',
    id: 'guide-storulvan',
    media: {
      position: '50% 30%',
      src: '/images/blahake_steve-dahlfors.jpg',
    },
    name: 'storulvan',
    route: '/guide/storulvan',
    title: 'Storulvån',
  },
]
