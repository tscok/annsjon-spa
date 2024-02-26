import PropTypes from 'prop-types'
import React from 'react'

import useText, { interpolate } from '../../utils/useText'

const ApplicationSent = ({ applicant }) => {
  const getText = useText()

  return (
    <article>
      <h4>
        {getText('thank-you')}, {applicant}!
      </h4>
      <p>{interpolate(getText('volunteer_confirmation'), { $1: <br /> })}</p>
    </article>
  )
}

ApplicationSent.propTypes = {
  applicant: PropTypes.string.isRequired,
}

export default ApplicationSent
