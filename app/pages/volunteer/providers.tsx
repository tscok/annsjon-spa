import { Outlet } from 'react-router-dom'
import { FormProvider } from 'app/form/provider'
import { FormHeader } from './form-header'
import { formState } from './form-state'
import { EventProvider } from './event-context'

export const Providers = () => (
  <FormProvider initialState={formState}>
    <EventProvider>
      <FormHeader />
      <Outlet />
    </EventProvider>
  </FormProvider>
)
