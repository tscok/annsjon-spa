import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useForm } from 'app/form/use-form'
import { Autocomplete, Checkbox, Fieldset, Select } from 'app/ui/form'
import { H2 } from 'app/ui/text/heading'
import { Span } from 'app/ui/text/span'
import { nationalities } from './nationalities'

export const Form = () => {
  const t = useDictionary('form')
  const navigate = useNavigate()
  const { status, onSubmit } = useForm()

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
            required
          />
          <TextField
            autoComplete="off"
            fullWidth
            id="lname-text-field"
            label={t('last-name')}
            name="lname"
            required
          />
        </Fieldset>
        <Fieldset>
          <Select label={t('gender')} name="gender">
            <MenuItem value="female">{t('gender.female')}</MenuItem>
            <MenuItem value="male">{t('gender.male')}</MenuItem>
            <MenuItem value="other">{t('gender.other')}</MenuItem>
          </Select>
          <TextField
            autoComplete="off"
            fullWidth
            id="dob-text-field"
            label={t('dob')}
            name="birth"
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
          required
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
        />
        <Fieldset>
          <TextField
            autoComplete="off"
            fullWidth
            id="email-text-field"
            label={t('email')}
            name="email"
            required
            type="email"
          />
          <TextField
            autoComplete="off"
            fullWidth
            id="phone-text-field"
            label={t('phone')}
            name="phone"
            type="tel"
          />
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
