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

type Keys<K extends string> = Record<K, string>

export type Dictionary = {
  pages: Pages
}

export type TranslateFn<T> = <K extends keyof T>(key: K) => T[K]
