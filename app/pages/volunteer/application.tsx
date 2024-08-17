import { Outlet } from 'react-router-dom'
import { FormProvider } from 'app/form/provider'

export const Application = () => (
  <FormProvider>
    <Outlet />
  </FormProvider>
)
