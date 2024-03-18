import { useDictionary } from 'app/i18n/use-dictionary'
import { interpolate } from 'app/utils/interpolate'
import { H2 } from 'app/ui/text/heading'
import { P } from 'app/ui/text/p'

export const ApplicationSent = ({ applicant }: { applicant: string }) => {
  const t = useDictionary('form')

  return (
    <>
      <H2>{interpolate(t('thanks'), { $1: applicant })}</H2>
      <P>{t('success')}</P>
    </>
  )
}
