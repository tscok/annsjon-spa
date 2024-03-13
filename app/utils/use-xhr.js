import { useState } from 'react'

export const useXhr = () => {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(undefined)

  const postRequest = (data) => {
    const xhr = new XMLHttpRequest()

    xhr.open('POST', '/service.php', true)
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

  return [error, loading, postRequest, response]
}
