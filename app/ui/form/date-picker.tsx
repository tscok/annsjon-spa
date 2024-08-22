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
  onBlur?: (value: string) => void
  onChange?: (value?: string) => void
  required?: boolean
  shouldDisableYear?: (date: Dayjs) => boolean
  value?: string
  views?: DateView[]
}

export const DatePicker = ({
  format = DEFAULT_FORMAT,
  helperText,
  id,
  onBlur,
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
        onBlur: (event) => onBlur?.(event.target.value),
        required,
      },
    }}
    value={stringToDate(value)}
  />
)

export const YearPicker = ({ onChange, ...props }: DatePickerProps) => {
  const maxDate = dayjs().subtract(16, 'years')
  const minDate = dayjs().subtract(100, 'years')

  const isOutOfScope = (date: Dayjs) =>
    date.isBefore(minDate) || date.isAfter(maxDate)

  const onBlur = (value: string) => {
    const date = stringToDate(value)
    if (date && isOutOfScope(date)) onChange?.(undefined)
  }

  return (
    <DatePicker
      {...props}
      format="YYYY"
      onBlur={onBlur}
      onChange={onChange}
      shouldDisableYear={isOutOfScope}
      views={['year']}
    />
  )
}
