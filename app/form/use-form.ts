import { useContext } from 'react'
import { FormContext, FormContextType } from './context'

export function useForm<T extends object>() {
  const context = useContext(FormContext) as FormContextType<T>
  if (!context) {
    throw new Error('useForm must be used with FormProvider')
  }
  return context
}
