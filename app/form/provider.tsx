import { PropsWithChildren, useState } from 'react'
import { FormContext, FormStatus } from './context'

export const FormProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<FormData>()
  const [status, setStatus] = useState<FormStatus>('idle')

  const _update = (update: { data?: FormData; status: FormStatus }) => {
    if (update.data) setState(update.data)
    setStatus(update.status)
  }

  const onSubmit = async (data: FormData) => {
    const options = { body: data, method: 'post' }
    try {
      _update({ data, status: 'loading' })
      const response = await fetch('/service.php', options)
      const responseText = (await response.text()) as string | false
      if (response.status === 200 && !!responseText) {
        _update({ status: 'success' })
      } else {
        _update({ status: 'error' })
      }
    } catch (e) {
      _update({ status: 'error' })
    }
  }

  const value = { onSubmit, data: state, status }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
