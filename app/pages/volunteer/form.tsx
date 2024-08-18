import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useForm } from 'app/form/use-form'
import { Autocomplete, Checkbox, Fieldset, Select } from 'app/ui/form'
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
            autoComplete="off"
            fullWidth
            id="fname-text-field"
            label={t('first-name')}
            name="fname"
            onChange={(event) => onUpdate('fname', event.target.value)}
            required
            value={state.fname}
          />
          <TextField
            autoComplete="off"
            fullWidth
            id="lname-text-field"
            label={t('last-name')}
            name="lname"
            onChange={(event) => onUpdate('lname', event.target.value)}
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
            autoComplete="off"
            fullWidth
            id="dob-text-field"
            label={t('dob')}
            name="birth"
            onChange={(event) => onUpdate('birth', event.target.value)}
            value={state.birth}
          />
        </Fieldset>
        <TextField
          autoComplete="off"
          fullWidth
          helperText={t('about.hint')}
          id="about-text-area"
          label={t('about')}
          minRows={3}
          multiline
          name="about"
          onChange={(event) => onUpdate('about', event.target.value)}
          required
          value={state.about}
        />
        <TextField
          autoComplete="off"
          fullWidth
          helperText={t('timeframe.hint')}
          id="timeframe-text-area"
          label={t('timeframe')}
          minRows={2}
          multiline
          name="timeframe"
          onChange={(event) => onUpdate('timeframe', event.target.value)}
          value={state.timeframe}
        />
        <Fieldset>
          <TextField
            autoComplete="off"
            fullWidth
            id="email-text-field"
            label={t('email')}
            name="email"
            onChange={(event) => onUpdate('email', event.target.value)}
            required
            type="email"
            value={state.email}
          />
          <TextField
            autoComplete="off"
            fullWidth
            id="phone-text-field"
            label={t('phone')}
            name="phone"
            onChange={(event) => onUpdate('phone', event.target.value)}
            type="tel"
            value={state.phone}
          />
        </Fieldset>
        <Autocomplete
          label={t('nationality')}
          name="nationality"
          onChange={(value) => onUpdate('nationality', value)}
          options={nationalities}
          value={state.nationality}
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
