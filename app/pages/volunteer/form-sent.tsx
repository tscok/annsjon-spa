import Alert from '@mui/material/Alert'
import { useDictionary } from 'app/i18n/use-dictionary'
import { interpolate } from 'app/utils/interpolate'
import { H2, H3 } from 'app/ui/text/heading'
import { useLoaderData } from 'react-router-dom'
import { LoaderResponse } from 'app/utils/send-form-loader'
import { A } from 'app/ui/text/a'
import { TextArea } from 'app/ui/form'
import { formatData } from './parseData'

export const FormSent = () => {
  const t = useDictionary('form')
  const { data, error } = useLoaderData() as LoaderResponse

  if (error) {
    return (
      <>
        <H2>{t('error.title')}</H2>
        <Alert severity="error">
          {interpolate(t('error.body'), {
            $1: <A href="mailto:volunteer@annsjon.org" />,
          })}
        </Alert>
        <H3>Mejla din ansökan</H3>
        <TextArea defaultValue={formatData(data)} />
      </>
    )
  }

  return (
    <>
      <H2>{interpolate(t('thanks'), { $1: data.fname })}</H2>
      <Alert severity="success">{t('success')}</Alert>
    </>
  )
}
