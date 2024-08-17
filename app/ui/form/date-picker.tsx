import { DateView, DatePicker as XDatePicker } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'

const DATE_FORMAT = 'YYYY-MM-DD'

export function toValue(value: Dayjs | null, format?: string) {
  return value?.format(format ?? DATE_FORMAT)
}

export function toDate(value?: string) {
  return value ? dayjs(value) : null
}

export const DatePicker = ({
  format,
  helperText,
  id,
  label,
  maxDate,
  minDate,
  name,
  onChange,
  required,
  value = null,
  views,
}: {
  format?: string
  helperText?: string
  id: string
  label: string
  maxDate?: Dayjs
  minDate?: Dayjs
  name: string
  onChange?: (value: Dayjs | null) => void
  required?: boolean
  value?: Dayjs | null
  views?: DateView[]
}) => (
  <XDatePicker
    format={format ?? DATE_FORMAT}
    label={label}
    maxDate={maxDate}
    minDate={minDate}
    name={name}
    onChange={(value) => onChange?.(value)}
    slotProps={{
      textField: {
        autoComplete: 'off',
        fullWidth: true,
        helperText,
        id,
        required,
      },
    }}
    value={value}
    views={views}
  />
)
