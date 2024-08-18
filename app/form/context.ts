import { createContext } from 'react'

type FormContextProps = {
  data: FormData | undefined
  onSubmit: (data: FormData) => Promise<void>
  status: FormStatus
}

export type FormStatus = 'error' | 'idle' | 'loading' | 'success'

export const FormContext = createContext<FormContextProps | null>(null)
