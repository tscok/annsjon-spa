import { interpolate } from 'app/utils'
import { H2, P } from 'app/ui'
import { useTranslation } from 'app/i18n'

const ApplicationSent = ({ applicant }: { applicant: string }) => {
  const t = useTranslation('form')

  return (
    <>
      <H2>{interpolate(t('thanks'), { $1: applicant })}</H2>
      <P>{t('success')}</P>
    </>
  )
}

export default ApplicationSent
