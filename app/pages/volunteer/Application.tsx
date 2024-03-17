import { useSendForm } from 'app/utils'
import ApplicationForm from './ApplicationForm'
import ApplicationSent from './ApplicationSent'

export const Application = () => {
  const { error, loading, response, sendForm } = useSendForm()

  return typeof response === 'string' ? (
    <ApplicationSent applicant={response} />
  ) : (
    <ApplicationForm error={error} loading={loading} onSubmit={sendForm} />
  )
}
