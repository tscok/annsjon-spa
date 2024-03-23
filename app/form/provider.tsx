import { PropsWithChildren, useState } from 'react'
import { defaultState, FormContext, State } from './context'

export const FormProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(defaultState)

  const update = (update: Partial<State>) =>
    setState((prev) => ({ ...prev, ...update }))

  const onSubmit = async (data: FormData) => {
    const options = { body: data, method: 'post' }
    try {
      update({ ...defaultState, loading: true })
      const response = await fetch('/service.php', options)
      const responseText = (await response.text()) as string | false
      if (response.status === 200 && !!responseText) {
        update({ loading: false, success: true, data })
      } else {
        update({ loading: false, error: true, data })
      }
    } catch (e) {
      update({ loading: false, error: true, data })
    }
  }

  const value = { onSubmit, ...state }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
