import { FormEvent } from 'react'
import { useTranslation } from 'app/i18n'
import { interpolate, nationalities } from 'app/utils'
import {
  Autocomplete,
  H2,
  P,
  TextInput,
  Fieldset,
  Checkbox,
  Button,
  A,
  Select,
} from 'app/ui'
import { Stack } from 'app/ui/mui'

const ApplicationForm = ({
  error,
  loading,
  onSubmit,
}: {
  error: boolean
  loading: boolean
  onSubmit: (data: any) => void
}) => {
  const t = useTranslation('form')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onSubmit(formData)
  }

  return (
    <>
      <H2>{t('title')}</H2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={{ xs: 2, md: 4 }}>
          <Fieldset>
            <TextInput label={t('first-name')} name="fname" required />
            <TextInput label={t('last-name')} name="lname" required />
          </Fieldset>
          <Fieldset>
            <Select
              defaultValue="female"
              label={t('gender')}
              name="gender"
              options={[
                { label: t('gender.female'), value: 'female' },
                { label: t('gender.male'), value: 'male' },
                { label: t('gender.other'), value: 'other' },
              ]}
            />
            <TextInput label={t('dob')} name="birth" />
          </Fieldset>
          <TextInput
            hint={t('about.hint')}
            label={t('about')}
            minRows={2}
            multiline
            name="about"
            required
          />
          <TextInput
            hint={t('timeframe.hint')}
            label={t('timeframe')}
            minRows={2}
            multiline
            name="timeframe"
          />
          <Fieldset>
            <TextInput label={t('email')} name="email" required />
            <TextInput label={t('phone')} name="phone" />
          </Fieldset>
          <Autocomplete
            label={t('nationality')}
            options={nationalities}
            name="nationality"
          />
          <Fieldset>
            <Checkbox label={t('car')} name="car" value="yes" />
            <Checkbox label={t('driver')} name="driver" value="yes" />
          </Fieldset>
        </Stack>
        <P variant="body2">
          {interpolate(t('mandatory'), {
            $1: <strong>*</strong>,
          })}
        </P>
        <Button
          disabled={error || loading}
          disableElevation
          size="large"
          type="submit"
        >
          {loading ? t('submitting') : t('submit')}
        </Button>
      </form>
      {error && (
        <P>
          {interpolate(t('error.body'), {
            $1: <strong>{t('error.title')}</strong>,
            $2: <A href="mailto:volunteer@annsjon.org" />,
          })}
        </P>
      )}
    </>
  )
}

export default ApplicationForm
