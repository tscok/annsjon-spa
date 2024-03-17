import { useCallback, useState } from 'react'

type State = { error: boolean; loading: boolean; response?: string }

export function useSendForm() {
  const [state, setState] = useState<State>({
    error: false,
    loading: false,
    response: undefined,
  })

  const updateState = (update: Partial<State>) =>
    setState((prevState) => ({ ...prevState, ...update }))

  const sendForm = useCallback(async (payload: FormData) => {
    try {
      updateState({ loading: true })
      const response = await fetch('/service.php', {
        body: payload,
        method: 'POST',
      })
      const data = (await response.json()) as string
      updateState({ response: data })
    } catch {
      updateState({ error: true })
    } finally {
      updateState({ loading: false })
    }
  }, [])

  return { sendForm, ...state }
}
