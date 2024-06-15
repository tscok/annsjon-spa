import { useLanguage } from 'app/language/use-language'

type DateFormat = `full` | 'long' | 'medium' | 'short'

export function useFormatDate() {
  const { language } = useLanguage()

  return (date: string, format: DateFormat = 'medium') => {
    try {
      const dateToFormat = new Date(date)
      return new Intl.DateTimeFormat(language.locale, {
        dateStyle: format,
      }).format(dateToFormat)
    } catch (error) {
      return 'Invalid Date'
    }
  }
}
