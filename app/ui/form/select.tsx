import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MuiSelect from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

export function Select<T extends string>({
  label,
  name,
  onChange,
  options,
  value,
}: {
  label: string
  name: string
  onChange?: (value: T) => void
  options: { label: string; value: T }[]
  value?: string
}) {
  return (
    <FormControl fullWidth>
      <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
      <MuiSelect
        id={`select-${name}`}
        labelId={`select-${name}-label`}
        label={label}
        name={name}
        onChange={(event) => onChange?.(event.target.value as T)}
        value={value ?? ''}
        variant="outlined"
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  )
}
