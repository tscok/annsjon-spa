import { createContext } from 'react'

type FormContextProps = State & {
  onSubmit: (data: FormData) => Promise<void>
}

export type State = {
  data: FormData | undefined
  error: boolean
  loading: boolean
  success: boolean
}

export const defaultState: State = {
  data: undefined,
  error: false,
  loading: false,
  success: false,
}

export const FormContext = createContext<FormContextProps | null>(null)
