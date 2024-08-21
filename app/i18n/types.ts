type CookieDialog = Keys<'title' | 'body.pt1' | 'body.pt2' | 'reject' | 'allow'>

type ErrorBoundary = Keys<'status' | 'title' | 'body' | 'link'>

type Form = Keys<
  | 'about.hint'
  | 'about'
  | 'car'
  | 'country'
  | 'country.search'
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
  | 'projects.ringing'
  | 'projects.surveys'
  | 'reports'
  | 'reports.press-release'
  | 'volunteer'
  | 'volunteer.information'
  | 'volunteer.application'
  | 'volunteer.mountainfit'
  | 'volunteer.info.button'
  | 'volunteer.info.title'
  | 'about'
  | 'contact'
  | 'result'
>

type Site = Keys<'title' | 'webmaster'>

type Startpage = Keys<
  | 'credit.photo'
  | 'directions.body'
  | 'directions.map'
  | 'directions.title'
  | 'guide.ann'
  | 'guide.handol'
  | 'guide.hogasen'
  | 'guide.storlien'
  | 'guide.storulvan'
  | 'project.great-snipe.body'
  | 'project.great-snipe.title'
  | 'project.ringing.body'
  | 'project.ringing.title'
  | 'project.survey.body'
  | 'project.survey.title'
  | 'section-title.guides'
  | 'section-title.projects'
  | 'event.open-house'
  | 'event.survey'
  | 'event.ringing'
  | 'event.season-end'
  | 'events.title'
>

type Keys<K extends string> = Record<K, string>

export type Dictionary = {
  cookieDialog: CookieDialog
  errorBoundary: ErrorBoundary
  form: Form
  formSent: FormSent
  pages: Pages
  startpage: Startpage
  site: Site
}

export type TranslateFn<T> = <K extends keyof T>(key: K) => T[K] | K

export type I18nKey<N extends keyof Dictionary> = keyof Dictionary[N]
