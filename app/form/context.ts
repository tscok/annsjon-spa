import { createContext } from 'react'
import { OnUpdate } from './types'

export type FormContextType<T extends object> = {
  onSubmit: (data: FormData) => Promise<void>
  onUpdate: OnUpdate<T>
  state: T
  status: FormStatus
}

export type FormStatus = 'error' | 'idle' | 'loading' | 'success'

export const FormContext = createContext<FormContextType<object> | null>(null)
