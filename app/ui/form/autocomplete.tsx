import MuiAutocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

type AutocompleteProps = {
  name?: string
  label: string
  onChange?: (value: string) => void
  options: string[]
  required?: boolean
  value?: string
}

export const Autocomplete = ({
  label,
  name,
  onChange,
  options,
  required,
  value,
}: AutocompleteProps) => (
  <MuiAutocomplete
    disablePortal
    id={name}
    fullWidth
    options={options}
    renderInput={(params) => (
      <TextField
        {...params}
        label={label}
        name={name}
        onChange={(event) => onChange?.(event.target.value)}
        required={required}
        value={value}
      />
    )}
  />
)
