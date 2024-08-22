import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useForm } from 'app/form/use-form'
import {
  Autocomplete,
  Checkbox,
  Fieldset,
  Select,
  TextArea,
  TextField,
} from 'app/ui/form'
import { H2 } from 'app/ui/text/heading'
import { Span } from 'app/ui/text/span'
import { nationalities } from './nationalities'
import { FormState } from './form-state'

export const Form = () => {
  const t = useDictionary('form')
  const navigate = useNavigate()
  const { onSubmit, onUpdate, state, status } = useForm<FormState>()

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
          <TextField
            id="fname-text-field"
            label={t('first-name')}
            name="fname"
            onChange={(value) => onUpdate('fname', value)}
            required
            value={state.fname}
          />
          <TextField
            id="lname-text-field"
            label={t('last-name')}
            name="lname"
            onChange={(value) => onUpdate('lname', value)}
            required
            value={state.lname}
          />
        </Fieldset>
        <Fieldset>
          <Select
            label={t('gender')}
            name="gender"
            onChange={(value) => onUpdate('gender', value)}
            options={[
              { label: t('gender.female'), value: 'female' },
              { label: t('gender.male'), value: 'male' },
              { label: t('gender.other'), value: 'other' },
            ]}
            value={state.gender}
          />
          <TextField
            id="dob-text-field"
            label={t('dob')}
            name="birth"
            onChange={(value) => onUpdate('birth', value)}
            value={state.birth}
          />
        </Fieldset>
        <TextArea
          helperText={t('about.hint')}
          id="about-text-area"
          label={t('about')}
          name="about"
          onChange={(value) => onUpdate('about', value)}
          required
          value={state.about}
        />
        <TextArea
          helperText={t('timeframe.hint')}
          id="timeframe-text-area"
          label={t('timeframe')}
          minRows={2}
          name="timeframe"
          onChange={(value) => onUpdate('timeframe', value)}
          value={state.timeframe}
        />
        <Fieldset>
          <TextField
            id="email-text-field"
            label={t('email')}
            name="email"
            onChange={(value) => onUpdate('email', value)}
            required
            type="email"
            value={state.email}
          />
          <TextField
            id="phone-text-field"
            label={t('phone')}
            name="phone"
            onChange={(value) => onUpdate('phone', value)}
            type="tel"
            value={state.phone}
          />
        </Fieldset>
        <Autocomplete
          label={t('nationality')}
          name="nationality"
          onChange={(value) => onUpdate('nationality', value)}
          options={nationalities}
        />
        <Fieldset>
          <Checkbox
            checked={state.car}
            label={t('car')}
            name="car"
            onChange={(value) => onUpdate('car', value)}
          />
          <Checkbox
            checked={state.driver}
            label={t('driver')}
            name="driver"
            onChange={(value) => onUpdate('driver', value)}
          />
        </Fieldset>
      </Stack>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        mt={2}
        spacing={{ xs: 2 }}
      >
        <Span small>{t('mandatory-fields')}</Span>
        <Button
          disabled={status === 'loading'}
          size="large"
          type="submit"
          variant="contained"
        >
          {t('submit')}
        </Button>
      </Stack>
    </form>
  )
}
