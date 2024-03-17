export type Route = { name: string; path: string; children?: Route[] }

export type Locale = 'en' | 'sv'

export type Language = {
  emoji: string
  locale: Locale
  name: 'English' | 'Svenska'
}
