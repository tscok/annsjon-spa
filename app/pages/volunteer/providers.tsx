import dayjs from 'dayjs'
import 'dayjs/locale/sv'
import { Outlet } from 'react-router-dom'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FormProvider } from 'app/form/provider'
import { formState } from './form-state'
import { useLanguage } from 'app/language/use-language'

export const Providers = () => {
  const { language } = useLanguage()

  return (
    <FormProvider initialState={formState}>
      <LocalizationProvider
        adapterLocale={dayjs.locale(language.locale)}
        dateAdapter={AdapterDayjs}
      >
        <Outlet />
      </LocalizationProvider>
    </FormProvider>
  )
}
