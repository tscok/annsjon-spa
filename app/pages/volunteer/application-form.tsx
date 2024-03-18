import { FormEvent } from 'react'
import Stack from '@mui/material/Stack'
import { useDictionary } from 'app/i18n/use-dictionary'
import {
  Autocomplete,
  Checkbox,
  Fieldset,
  Option,
  Select,
  SubmitButton,
  TextArea,
  TextField,
} from 'app/ui/form'
import { H2 } from 'app/ui/text/heading'
import { P } from 'app/ui/text/p'
import { nationalities } from './nationalities'

export const ApplicationForm = ({
  loading,
  onSubmit,
}: {
  loading: boolean
  onSubmit: (data: FormData) => void
}) => {
  const t = useDictionary('form')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(new FormData(event.currentTarget))
  }

  return (
    <>
      <H2>{t('title')}</H2>
      <form onSubmit={handleSubmit}>
        <Stack spacing={{ xs: 2, md: 4 }}>
          <Fieldset>
            <TextField label={t('first-name')} name="fname" required />
            <TextField label={t('last-name')} name="lname" required />
          </Fieldset>
          <Fieldset>
            <Select defaultValue="female" label={t('gender')} name="gender">
              <Option value="female">{t('gender.female')}</Option>
              <Option value="male">{t('gender.male')}</Option>
              <Option value="other">{t('gender.other')}</Option>
            </Select>
            <TextField label={t('dob')} name="birth" />
          </Fieldset>
          <TextArea
            helperText={t('about.hint')}
            label={t('about')}
            name="about"
            required
          />
          <TextArea
            helperText={t('timeframe.hint')}
            label={t('timeframe')}
            name="timeframe"
          />
          <Fieldset>
            <TextField label={t('email')} name="email" required />
            <TextField label={t('phone')} name="phone" />
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
        <P variant="body2">{t('mandatory-fields')}</P>
        <SubmitButton disabled={loading}>
          {loading ? t('submitting') : t('submit')}
        </SubmitButton>
      </form>
    </>
  )
}
