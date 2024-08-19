import { DatePicker as XDatePicker, DateView } from '@mui/x-date-pickers'
import dayjs, { Dayjs } from 'dayjs'

export function stringToDate(date?: string) {
  return date ? dayjs(date) : null
}

export function dateToString(date: Dayjs | null, format?: string) {
  return date?.format(format ?? 'YYYY-MM-DD')
}

type DatePickerProps = {
  helperText?: string
  id: string
  label: string
  name?: string
  maxDate?: Dayjs
  minDate?: Dayjs
  onChange?: (value: Dayjs | null) => void
  required?: boolean
  value?: Dayjs | null
  views?: DateView[]
}

export const DatePicker = ({
  helperText,
  id,
  onChange,
  required,
  ...props
}: DatePickerProps) => (
  <XDatePicker
    {...props}
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
  />
)

export const YearPicker = (props: DatePickerProps) => (
  <DatePicker {...props} views={['year']} />
)
