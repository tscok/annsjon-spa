import dayjs from 'dayjs'
import 'dayjs/locale/sv'
import { PropsWithChildren } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { useLanguage } from 'app/language/use-language'

export const DateProvider = ({ children }: PropsWithChildren) => {
  const { language } = useLanguage()
  return (
    <LocalizationProvider
      adapterLocale={dayjs.locale(language.locale)}
      dateAdapter={AdapterDayjs}
    >
      {children}
    </LocalizationProvider>
  )
}
