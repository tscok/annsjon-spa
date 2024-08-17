import { PropsWithChildren, useState } from 'react'
import { FormContext, FormStatus } from './context'
import { OnChange } from './types'

function toFormData<T extends object>(state: T) {
  const formData = new FormData()
  Object.entries(state).forEach(([key, value]) => formData.append(key, value))
  return formData
}

export function FormProvider<T extends object>({
  children,
  initialState,
}: PropsWithChildren<{ initialState: T }>) {
  const [state, setState] = useState<T>(initialState)
  const [status, setStatus] = useState<FormStatus>('idle')

  const onChange: OnChange<T> = (key, value) => {
    setState((prevState) => ({ ...prevState, [key]: value }))
  }

  const onSubmit = async () => {
    try {
      setStatus('loading')
      const options = { body: toFormData(state), method: 'post' }
      const response = await fetch('/service.php', options)
      const responseText = (await response.text()) as string | false
      if (response.status === 200 && !!responseText) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch (e) {
      setStatus('error')
    }
  }

  const value = { onChange, onSubmit, state, status }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
