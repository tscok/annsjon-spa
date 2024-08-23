import { PropsWithChildren, useState } from 'react'
import { FormClient } from 'app/api/form-client'
import { FormContext, FormStatus } from './context'
import { OnUpdate } from './types'

const formClient = new FormClient()

export function FormProvider<T extends object>({
  children,
  initialState,
}: PropsWithChildren<{ initialState: T }>) {
  const [state, setState] = useState(initialState)
  const [status, setStatus] = useState<FormStatus>('idle')

  const onUpdate: OnUpdate<T> = (key, value) =>
    setState((prevState) => ({ ...prevState, [key]: value }))

  const onSubmit = async (data: FormData) => {
    try {
      setStatus('loading')
      const response = await formClient.submit(data)
      setStatus(response.status === 200 ? 'success' : 'error')
    } catch (e) {
      setStatus('error')
    }
  }

  const value = { onSubmit, onUpdate, state, status }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
