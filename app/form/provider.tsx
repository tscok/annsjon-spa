import { PropsWithChildren, useState } from 'react'
import { defaultState, FormContext, State } from './context'

export const FormProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(defaultState)

  const update = (update: Partial<State>) =>
    setState((prev) => ({ ...prev, ...update }))

  const onSubmit = async (data: FormData) => {
    const options = { body: data, method: 'post' }
    try {
      update({ loading: true })
      const response = await fetch('/service.php', options)
      const status = (await response.json()) as string | false
      update({ loading: false, success: Boolean(status), data })
    } catch (e) {
      update({ loading: false, error: true, data })
    }
  }

  const value = { onSubmit, ...state }

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}
