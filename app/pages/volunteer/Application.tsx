import { useXhr } from 'app/utils'
import ApplicationForm from './ApplicationForm'
import ApplicationSent from './ApplicationSent'

export const Application = () => {
  const [error, loading, postRequest, responseText] = useXhr()

  if (typeof responseText === 'string') {
    return <ApplicationSent applicant={responseText} />
  }

  return (
    <ApplicationForm
      error={error as boolean}
      loading={loading as boolean}
      onSubmit={postRequest as (data: any) => void}
    />
  )
}
