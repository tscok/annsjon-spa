import { useState } from 'react'
import { useSendForm } from 'app/utils/use-send-form'
import { ApplicationError } from './application-error'
import { ApplicationForm } from './application-form'
import { ApplicationSent } from './application-sent'

export const Application = () => {
  const { error, loading, response, sendForm } = useSendForm()
  const [formData, setFormData] = useState<FormData | undefined>()

  const handleSubmit = (data: FormData) => {
    setFormData(data)
    sendForm(data)
  }

  if (typeof response === 'string') {
    return <ApplicationSent applicant={response} />
  }

  if (error && formData) {
    return <ApplicationError formData={formData} />
  }

  return <ApplicationForm loading={loading} onSubmit={handleSubmit} />
}
