import { FormEvent } from 'react'
import { useTranslation } from '../../i18n'
import { useText, interpolate, nationalities } from '../../utils'
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
} from '../../ui'
import { Stack } from '../../ui/mui'

const ApplicationForm = ({
  error,
  loading,
  onSubmit,
}: {
  error: boolean
  loading: boolean
  onSubmit: (data: any) => void
}) => {
  const t = useTranslation('pages')
  const getText = useText()

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    onSubmit(formData)
  }

  return (
    <>
      <H2>{t('volunteer.application')}</H2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={{ xs: 2, md: 4 }}>
          <Fieldset>
            <TextInput label={getText('first-name')} name="fname" required />
            <TextInput label={getText('last-name')} name="lname" required />
          </Fieldset>
          <Fieldset>
            <Select
              defaultValue="female"
              label={getText('volunteer_gender')}
              name="gender"
              options={[
                { label: getText('volunteer_gender-f'), value: 'female' },
                { label: getText('volunteer_gender-m'), value: 'male' },
                { label: getText('volunteer_gender-x'), value: 'other' },
              ]}
            />
            <TextInput label={getText('volunteer_birthyear')} name="birth" />
          </Fieldset>
          <TextInput
            hint={getText('volunteer_about-hint')}
            label={getText('volunteer_about')}
            minRows={2}
            multiline
            name="about"
            required
          />
          <TextInput
            hint={getText('volunteer_timeframe-hint')}
            label={getText('volunteer_timeframe')}
            minRows={2}
            multiline
            name="timeframe"
          />
          <Fieldset>
            <TextInput label={getText('email')} name="email" required />
            <TextInput label={getText('phone')} name="phone" />
          </Fieldset>
          <Autocomplete
            label={getText('volunteer_nationality')}
            options={nationalities}
            name="nationality"
          />
          <Fieldset>
            <Checkbox label={getText('volunteer_car')} name="car" value="yes" />
            <Checkbox
              label={getText('volunteer_driving-license')}
              name="driver"
              value="yes"
            />
          </Fieldset>
        </Stack>
        <P variant="body2">
          {interpolate(getText('volunteer_mandatory'), {
            $1: <strong>*</strong>,
          })}
        </P>
        <Button
          disabled={error || loading}
          disableElevation
          size="large"
          type="submit"
        >
          {loading
            ? getText('volunteer_submitting')
            : getText('volunteer_submit')}
        </Button>
      </form>
      {error && (
        <P>
          {interpolate(getText('volunteer_error_message'), {
            $1: <strong>{getText('volunteer_error_title')}</strong>,
            $2: <A href="mailto:volunteer@annsjon.org" />,
          })}
        </P>
      )}
    </>
  )
}

export default ApplicationForm
