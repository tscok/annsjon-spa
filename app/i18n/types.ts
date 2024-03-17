type Form = Keys<
  | 'about.hint'
  | 'about'
  | 'car'
  | 'dob'
  | 'driver'
  | 'email'
  | 'error.body'
  | 'error.title'
  | 'first-name'
  | 'gender.female'
  | 'gender.male'
  | 'gender.other'
  | 'gender'
  | 'last-name'
  | 'mandatory'
  | 'nationality'
  | 'phone'
  | 'submit'
  | 'submitting'
  | 'success'
  | 'thanks'
  | 'timeframe.hint'
  | 'timeframe'
  | 'title'
>

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
  | 'result'
>

type Site = Keys<'title' | 'design'>

type Startpage = Keys<
  | 'tagline'
  | 'section-title.staff'
  | 'section-title.guides'
  | 'section-title.projects'
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
  | 'directions.title'
  | 'directions.body1'
  | 'directions.body2'
>

type Keys<K extends string> = Record<K, string>

export type Dictionary = {
  form: Form
  pages: Pages
  startpage: Startpage
  site: Site
}

export type TranslateFn<T> = <K extends keyof T>(key: K) => T[K]
