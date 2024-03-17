import { useText, interpolate } from 'app/utils'
import { H2, P } from 'app/ui'

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
