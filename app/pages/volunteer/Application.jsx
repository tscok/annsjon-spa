import React from 'react'

import Page from '../../components/Page'
import useXhr from '../../utils/useXhr'

import ApplicationForm from './ApplicationForm'
import ApplicationSent from './ApplicationSent'
import { Layout } from '../layout'


const Application = () => {
  const [error, loading, postRequest, responseText] = useXhr()

  return (
    <Layout>
      {responseText ? (
        <ApplicationSent applicant={responseText} />
      ) : (
        <ApplicationForm
          error={error}
          loading={loading}
          onSubmit={postRequest}
        />
      )}
    </Layout>
  )
}

export default Application
