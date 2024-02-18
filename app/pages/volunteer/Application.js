import React from 'react'

import useXhr from 'app/utils/useXhr'

import ApplicationForm from './ApplicationForm'
import ApplicationSent from './ApplicationSent'

const Application = () => {
  const [error, loading, postRequest, responseText] = useXhr()

  if (responseText !== undefined) {
    return <ApplicationSent applicant={responseText} />
  }

  return (
    <ApplicationForm error={error} loading={loading} onSubmit={postRequest} />
  )
}

export default Application
