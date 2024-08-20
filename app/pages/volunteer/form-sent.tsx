import { Navigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useForm } from 'app/form/use-form'
import { interpolate } from 'app/utils/interpolate'
import { TextArea } from 'app/ui/form'
import { H4 } from 'app/ui/text/heading'
import { A } from 'app/ui/text/a'
import { P } from 'app/ui/text/p'
import { getFallback } from './get-fallback'
import { FormState } from './form-state'

export const FormSent = () => {
  const t = useDictionary('formSent')
  const t2 = useDictionary('pages')
  const { state, status } = useForm<FormState>()

  if (status === 'error') {
    return (
      <>
        <Alert severity="error" sx={{ mb: 4 }}>
          {t('alert.error')}
        </Alert>
        <H4>{t('fallback.title')}</H4>
        <P>
          {interpolate(t('fallback.body'), {
            $1: <A href="mailto:volunteer@annsjon.org" />,
          })}
        </P>
        <TextArea
          defaultValue={getFallback(state)}
          id="fallback-text-area"
          label={t('fallback.label')}
          name="fallback"
        />
      </>
    )
  }

  if (status === 'success') {
    return (
      <>
        <Alert severity="success" sx={{ mb: 4 }}>
          {t('alert.success')}
        </Alert>
        <P>
          {interpolate(t('meanwhile'), {
            $1: (
              <A href="/volunteer/information">{t2('volunteer.information')}</A>
            ),
          })}
        </P>
      </>
    )
  }

  return <Navigate replace to="/volunteer/application" />
}
