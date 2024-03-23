import Alert from '@mui/material/Alert'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { useDictionary } from 'app/i18n/use-dictionary'
import { interpolate } from 'app/utils/interpolate'
import { H2, H4 } from 'app/ui/text/heading'
import { useLoaderData } from 'react-router-dom'
import { LoaderResponse } from 'app/utils/send-form-loader'
import { A } from 'app/ui/text/a'
import { TextArea } from 'app/ui/form'
import { P } from 'app/ui/text/p'
import { getFallbackValue } from './getFallbackValue'

export const FormSent = () => {
  const t = useDictionary('formSent')
  const t2 = useDictionary('pages')
  const { data, error } = useLoaderData() as LoaderResponse
  const fallbackValue = getFallbackValue(data)

  if (error) {
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
            <TextArea value={fallbackValue} label={t('fallback.label')} />
          </CardContent>
        </Card>
      </>
    )
  }

  return (
    <>
      <H2>{interpolate(t('title'), { $1: data.fname })}</H2>
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
