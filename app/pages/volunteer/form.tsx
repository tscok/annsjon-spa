import dayjs from 'dayjs'
import { FormEvent } from 'react'
// import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useForm } from 'app/form/use-form'
import {
  Checkbox,
  DatePicker,
  Fieldset,
  Select,
  toDate,
  toValue,
} from 'app/ui/form'
import { H2 } from 'app/ui/text/heading'
import { Span } from 'app/ui/text/span'
import { FormState, Gender } from './form-state'

export const Form = () => {
  const t = useDictionary('form')
  // const navigate = useNavigate()
  const { onChange, onSubmit, state, status } = useForm<FormState>()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await onSubmit()
    // navigate('/volunteer/application/sent', { replace: true })
  }

  const today = dayjs()
  // TODO: Create useEvents to get dates across app
  const project = {
    start: dayjs('2024-07-01'),
    end: dayjs('2024-08-31'),
  }

  return (
    <form onSubmit={handleSubmit}>
      <H2>{t('title')}</H2>
      <Stack spacing={{ xs: 2, md: 3 }}>
        <Fieldset>
          <TextField
            autoComplete="off"
            fullWidth
            id="fname-text-field"
            label={t('first-name')}
            name="fname"
            onChange={(event) => onChange('firstName', event.target.value)}
            required
          />
          <TextField
            autoComplete="off"
            fullWidth
            id="lname-text-field"
            label={t('last-name')}
            name="lname"
            onChange={(event) => onChange('lastName', event.target.value)}
            required
          />
        </Fieldset>
        <Fieldset>
          <Select
            label={t('gender')}
            name="gender"
            onChange={(value) => onChange('gender', value as Gender)}
          >
            <MenuItem value="female">{t('gender.female')}</MenuItem>
            <MenuItem value="male">{t('gender.male')}</MenuItem>
            <MenuItem value="other">{t('gender.other')}</MenuItem>
          </Select>
          <DatePicker
            format="YYYY"
            label={t('dob')}
            maxDate={today.subtract(15, 'years')}
            name="dob"
            id="dob-text-field"
            onChange={(value) => onChange('birthyear', toValue(value, 'YYYY'))}
            value={toDate(state.birthyear)}
            views={['year']}
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
          onChange={(event) => onChange('about', event.target.value)}
          required
          value={state.about}
        />
        <Fieldset>
          <DatePicker
            helperText={t('arrival.hint')}
            id="arrival-date-picker"
            label={t('arrival')}
            maxDate={project.end}
            minDate={project.start.isAfter(today) ? project.start : today}
            name="arrival"
            onChange={(value) => onChange('arrival', toValue(value))}
            required
            value={toDate(state.arrival)}
          />
          <DatePicker
            helperText={t('departure.hint')}
            id="departure-date-picker"
            label={t('departure')}
            maxDate={project.end}
            minDate={
              dayjs(state.arrival).isAfter(project.start)
                ? dayjs(state.arrival).add(1, 'day')
                : project.start
            }
            name="departure"
            onChange={(value) => onChange('departure', toValue(value))}
            required
            value={toDate(state.departure)}
          />
        </Fieldset>
        <Fieldset>
          <TextField
            autoComplete="off"
            fullWidth
            id="email-text-field"
            label={t('email')}
            name="email"
            onChange={(event) => onChange('email', event.target.value)}
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
            onChange={(event) => onChange('phone', event.target.value)}
            type="tel"
            value={state.phone}
          />
        </Fieldset>
        <Fieldset>
          <Checkbox
            label={t('car')}
            name="car"
            onChange={(value) => onChange('arrivesByCar', value)}
            value={state.arrivesByCar}
          />
          <Checkbox
            label={t('driver')}
            name="driver"
            onChange={(value) => onChange('drivingLicense', value)}
            value={state.drivingLicense}
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
