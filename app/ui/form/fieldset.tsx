import { PropsWithChildren } from 'react'
import { Stack } from '../mui'

export const Fieldset = ({ children }: PropsWithChildren) => (
  <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 2, md: 4 }}>
    {children}
  </Stack>
)
