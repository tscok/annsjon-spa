import { useContext } from 'react'
import { FormContext } from './context'

export const useForm = () => {
  const context = useContext(FormContext)
  if (!context) {
    throw new Error('useForm must be used with FormProvider')
  }
  return context
}
