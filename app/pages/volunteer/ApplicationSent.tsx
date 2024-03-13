import { useText, interpolate } from '../../utils'
import { H2, P } from '../../ui'

const ApplicationSent = ({ applicant }: { applicant: string }) => {
  const getText = useText()

  return (
    <>
      <H2>
        {getText('thank-you')}, {applicant}!
      </H2>
      <P>{interpolate(getText('volunteer_confirmation'), { $1: ' ' })}</P>
    </>
  )
}

export default ApplicationSent
