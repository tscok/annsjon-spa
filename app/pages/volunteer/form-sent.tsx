import { Navigate } from 'react-router-dom'
import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useDictionary } from 'app/i18n/use-dictionary'
import { interpolate } from 'app/utils/interpolate'
import { H2, H4 } from 'app/ui/text/heading'
import { A } from 'app/ui/text/a'
import { TextArea } from 'app/ui/form'
import { P } from 'app/ui/text/p'
import { useForm } from 'app/form/use-form'
import { getFallback } from './get-fallback'

export const FormSent = () => {
  const t = useDictionary('formSent')
  const t2 = useDictionary('pages')
  const { error, data } = useForm()

  if (!data) {
    return <Navigate replace to="/volunteer/application" />
  }

  if (error && data) {
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
        <Card>
          <CardContent sx={{ backgroundColor: 'background.default' }}>
            <TextArea
              defaultValue={getFallback(data)}
              label={t('fallback.label')}
              name="fallback"
            />
          </CardContent>
        </Card>
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
