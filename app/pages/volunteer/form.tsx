import { Form as RouterForm } from 'react-router-dom'
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
import { Span } from 'app/ui/text/span'
import { nationalities } from './nationalities'

export const Form = () => {
  const t = useDictionary('form')

  return (
    <RouterForm action="/volunteer/application/sent" replace>
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
      <Stack direction="row" justifyContent="space-between" mt={2}>
        <Span small>{t('mandatory-fields')}</Span>
        <SubmitButton>{t('submit')}</SubmitButton>
      </Stack>
    </RouterForm>
  )
}
