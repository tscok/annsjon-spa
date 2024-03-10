type Pages = Keys<
  | 'home'
  | 'iba'
  | 'guide'
  | 'projects'
  | 'projects.great-snipe'
  | 'projects.great-snipe.background'
  | 'reports'
  | 'reports.press-release'
  | 'volunteer'
  | 'volunteer.information'
  | 'volunteer.application'
  | 'volunteer.mountainfit'
  | 'about'
  | 'contact'
>

type Startpage = Keys<
  | 'hero.h1'
  | 'hero.h2'
  | 'title.events'
  | 'title.guide'
  | 'title.projects'
  | 'hogasen.body'
  | 'storulvan.body'
  | 'handol.body'
  | 'ann.body'
  | 'great-snipe.title'
  | 'great-snipe.body'
  | 'survey.title'
  | 'survey.body'
  | 'ringing.title'
  | 'ringing.body'
  | 'read-more'
>

type Keys<K extends string> = Record<K, string>

export type Dictionary = {
  pages: Pages
  startpage: Startpage
}

export type TranslateFn<T> = <K extends keyof T>(key: K) => T[K]
