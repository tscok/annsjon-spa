import { Navigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import TextField from '@mui/material/TextField'
import { useDictionary } from 'app/i18n/use-dictionary'
import { interpolate } from 'app/utils/interpolate'
import { H2, H4 } from 'app/ui/text/heading'
import { A } from 'app/ui/text/a'
import { P } from 'app/ui/text/p'
import { useForm, isEmptyForm } from 'app/form/use-form'
// import { getFallback } from './get-fallback'
import { FormState } from './form-state'

export const FormSent = () => {
  const t = useDictionary('formSent')
  const t2 = useDictionary('pages')
  const { state, status } = useForm<FormState>()
  const noData = isEmptyForm(state)

  if (noData) {
    return <Navigate replace to="/volunteer/application" />
  }

  if (status === 'error' && noData) {
    return (
      <>
        <H2>{t('title')}</H2>
        <Alert severity="error" sx={{ mb: 4 }}>
          {t('alert.error')}
        </Alert>
        <H4>{t('fallback.title')}</H4>
        <P>
          {interpolate(t('fallback.body'), {
            $1: <A href="mailto:volunteer@annsjon.org" />,
          })}
        </P>
        <TextField
          autoComplete="off"
          defaultValue={'' /** TODO: Parse `state` to string */}
          fullWidth
          id="fallback-text-area"
          label={t('fallback.label')}
          multiline
          name="fallback"
        />
      </>
    )
  }

  return (
    <>
      <H2>{t('title')}</H2>
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
