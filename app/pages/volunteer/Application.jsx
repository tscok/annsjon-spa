import React from 'react'

import Page from '../../components/Page'
import useXhr from '../../utils/useXhr'

import ApplicationForm from './ApplicationForm'
import ApplicationSent from './ApplicationSent'


export const Application = () => {
  const [error, loading, postRequest, responseText] = useXhr()

  if (responseText !== undefined) {
    return <ApplicationSent applicant={responseText} />
  }

  return (
    <ApplicationForm
      error={error}
      loading={loading}
      onSubmit={postRequest}
    />
  )
}
