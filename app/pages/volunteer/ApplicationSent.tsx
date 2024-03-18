import { interpolate } from 'app/utils/interpolate'
import { H2 } from 'app/ui/text/heading'
import { P } from 'app/ui/text/p'
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
