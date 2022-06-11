import React from 'react'

import useXhr from 'app/utils/useXhr'

import ApplicationForm from './ApplicationForm'
import ApplicationSent from './ApplicationSent'

const Application = () => {
  const [error, loading, postRequest, responseText] = useXhr()

  return !error && !loading && responseText ? (
    <ApplicationSent applicant={responseText} />
  ) : (
    <ApplicationForm error={error} loading={loading} onSubmit={postRequest} />
  )
}

export default Application
