import { createContext } from 'react'
import { OnChange } from './types'

export type FormContextType<T extends object> = {
  onChange: OnChange<T>
  onSubmit: () => Promise<void>
  state: T
  status: FormStatus
}

export type FormStatus = 'error' | 'loading' | 'success' | 'idle'

export const FormContext = createContext<FormContextType<object> | null>(null)
