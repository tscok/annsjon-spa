import React from 'react'

import Page from '../../components/Page'
import useXhr from '../../utils/useXhr'

import ApplicationForm from './ApplicationForm'
import ApplicationSent from './ApplicationSent'


const Application = () => {
  const [error, loading, postRequest, responseText] = useXhr()

  return (
    <Page>
      {responseText ? (
        <ApplicationSent applicant={responseText} />
      ) : (
        <ApplicationForm
          error={error}
          loading={loading}
          onSubmit={postRequest}
        />
      )}
    </Page>
  )
}

export default Application
