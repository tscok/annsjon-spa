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
    id={`${name}-autocomplete`}
    fullWidth
    onChange={(_, value) => onChange?.(value ?? '')}
    options={options}
    renderInput={(params) => (
      <TextField {...params} label={label} name={name} required={required} />
    )}
    value={value || null}
  />
)
