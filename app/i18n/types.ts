type ErrorBoundary = Keys<'status' | 'title' | 'body' | 'link'>

type Form = Keys<
  | 'about.hint'
  | 'about'
  | 'car'
  | 'dob'
  | 'driver'
  | 'email'
  | 'first-name'
  | 'gender.female'
  | 'gender.male'
  | 'gender.other'
  | 'gender'
  | 'last-name'
  | 'mandatory-fields'
  | 'nationality'
  | 'phone'
  | 'submit'
  | 'timeframe.hint'
  | 'timeframe'
  | 'title'
>

type FormSent = Keys<
  | 'title'
  | 'alert.error'
  | 'alert.success'
  | 'fallback.title'
  | 'fallback.body'
  | 'fallback.label'
  | 'meanwhile'
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
  | 'storlien.body'
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
  | 'directions.body'
  | 'directions.map'
  | 'photo'
>

type Keys<K extends string> = Record<K, string>

export type Dictionary = {
  errorBoundary: ErrorBoundary
  form: Form
  formSent: FormSent
  pages: Pages
  startpage: Startpage
  site: Site
}

export type TranslateFn<T> = <K extends keyof T>(key: K) => T[K] | K
