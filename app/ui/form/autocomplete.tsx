import MuiAutocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

type AutocompleteProps = {
  label: string
  name: string
  onChange?: (value: string) => void
  options: string[]
  required?: boolean
}

export const Autocomplete = ({
  label,
  name,
  onChange,
  options,
  required,
}: AutocompleteProps) => (
  <MuiAutocomplete
    disablePortal
    fullWidth
    id={`${name}-autocomplete`}
    onChange={(_, value) => onChange?.(value ?? '')}
    options={options}
    renderInput={(params) => (
      <TextField {...params} label={label} name={name} required={required} />
    )}
  />
)
