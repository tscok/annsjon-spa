import { Outlet } from 'react-router-dom'
import { FormProvider } from 'app/form/provider'
import { formState } from './form-state'

export const Providers = () => (
  <FormProvider initialState={formState}>
    <Outlet />
  </FormProvider>
)
