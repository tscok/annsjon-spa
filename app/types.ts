export type Route = { name: string; path: string; children?: Route[] }

export type Locale = 'en' | 'sv'

export type Language = {
  emoji: string
  locale: Locale
  name: 'English' | 'Svenska'
}

export type DateRange = { from: string; to?: string }

export type Event = {
  dates: DateRange
  href: string
  id: string
  title: string
}

export type MediaCardType<T extends string> = {
  body: string
  id: string
  media: MediaType
  name: T
  title: string
  to: string
}

export type MediaType = {
  height?: number
  position?: string
  src: string
}
