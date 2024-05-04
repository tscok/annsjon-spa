type Accommodator = {
  name: string
  url?: string
  tel: string[]
  email?: string
}

export const accommodators: Accommodator[] = [
  {
    name: 'Camp Ånn',
    url: 'http://campann.se',
    tel: ['070 - 209 02 31'],
  },
  {
    name: 'Enaforsholm Fjällgård',
    url: 'http://www.enaforsholm.se',
    tel: ['070 - 527 30 26'],
  },
  {
    name: 'Jämtåsen',
    email: 'fam.jamting@hotmail.com',
    tel: ['0647 - 710 94', '070 - 646 11 30'],
  },
  {
    name: 'STF Storliens Fjällgård',
    url: 'http://www.storliensfjallgard.se',
    tel: ['0647 - 700 58'],
  },
]
