import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

type SelectProps<T extends string> = {
  label: string
  name: string
  onChange?: (value: T) => void
  options: { label: string; value: T }[]
  value?: T | null
}

export function Select<T extends string>({
  label,
  name,
  onChange,
  options,
  value,
}: SelectProps<T>) {
  return (
    <TextField
      defaultValue={value === undefined ? '' : undefined}
      fullWidth
      label={label}
      name={name}
      onChange={(event) => onChange?.(event.target.value as T)}
      select
      value={value === null ? '' : value}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}
