import { PropsWithChildren, useState } from 'react'
import { FormContext, FormStatus } from './context'
import { OnUpdate } from './types'

export function FormProvider<T extends object>({
  children,
  initialState,
}: PropsWithChildren<{ initialState: T }>) {
  const [state, setState] = useState(initialState)
  const [status, setStatus] = useState<FormStatus>('idle')

  const onUpdate: OnUpdate<T> = (key, value) =>
    setState((prevState) => ({ ...prevState, [key]: value }))

  const onSubmit = async (data: FormData) => {
    const options = { body: data, method: 'post' }
    try {
      setStatus('loading')
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

  const value = { onSubmit, onUpdate, state, status }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
