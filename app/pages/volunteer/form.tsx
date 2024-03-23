import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useForm } from 'app/form/use-form'
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
import { Span } from 'app/ui/text/span'
import { nationalities } from './nationalities'

export const Form = () => {
  const t = useDictionary('form')
  const navigate = useNavigate()
  const { loading, onSubmit } = useForm()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await onSubmit(new FormData(event.currentTarget))
    navigate('/volunteer/application/sent', { replace: true })
  }

  return (
    <form onSubmit={handleSubmit}>
      <H2>{t('title')}</H2>
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
          minRows={3}
          name="about"
          required
        />
        <TextArea
          helperText={t('timeframe.hint')}
          label={t('timeframe')}
          name="timeframe"
        />
        <Fieldset>
          <TextField label={t('email')} name="email" required type="email" />
          <TextField label={t('phone')} name="phone" />
        </Fieldset>
        <Autocomplete
          label={t('nationality')}
          options={nationalities}
          name="nationality"
        />
        <Fieldset>
          <Checkbox label={t('car')} name="car" />
          <Checkbox label={t('driver')} name="driver" />
        </Fieldset>
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        mt={2}
        spacing={{ xs: 2 }}
      >
        <Span small>{t('mandatory-fields')}</Span>
        <SubmitButton disabled={loading}>{t('submit')}</SubmitButton>
      </Stack>
    </form>
  )
}
