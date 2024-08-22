import { DatePicker as XDatePicker, DateView } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'

type DateFormat = 'YYYY-MM-DD' | 'YYYY'

const DEFAULT_FORMAT: DateFormat = 'YYYY-MM-DD'

export function stringToDate(date?: string) {
  return date ? dayjs(date) : null
}

export function dateToString(date: Dayjs | null, format: DateFormat) {
  return date?.format(format)
}

type DatePickerProps = {
  format?: DateFormat
  helperText?: string
  id: string
  label: string
  name?: string
  maxDate?: Dayjs
  minDate?: Dayjs
  onChange?: (value?: string) => void
  required?: boolean
  value?: string
  views?: DateView[]
}

export const DatePicker = ({
  format = DEFAULT_FORMAT,
  helperText,
  id,
  onChange,
  required,
  value,
  ...props
}: DatePickerProps) => (
  <XDatePicker
    {...props}
    onChange={(date) => onChange?.(dateToString(date, format))}
    slotProps={{
      textField: {
        autoComplete: 'off',
        fullWidth: true,
        helperText,
        id,
        required,
      },
    }}
    value={stringToDate(value)}
  />
)

export const YearPicker = (props: DatePickerProps) => (
  <DatePicker {...props} format="YYYY" maxDate={dayjs()} views={['year']} />
)
