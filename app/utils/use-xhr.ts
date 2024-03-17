import { useState } from 'react'

const params = {
  method: 'POST',
  url: '/service.php',
  async: true,
} as const

export const useXhr = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<string | undefined>(undefined)

  const postRequest = (data: FormData) => {
    const xhr = new XMLHttpRequest()

    xhr.open(params.method, params.url, params.async)
    setLoading(true)

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        setResponse(xhr.responseText)
      } else {
        setError(true)
      }
      setLoading(false)
    }

    xhr.send(data)
  }

  return { error, loading, postRequest, response }
}
