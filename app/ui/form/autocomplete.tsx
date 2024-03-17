import MuiAutocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'

type AutocompleteProps = {
  name?: string
  label: string
  options: string[]
  required?: boolean
}

export const Autocomplete = ({
  label,
  name,
  options,
  required,
}: AutocompleteProps) => (
  <MuiAutocomplete
    disablePortal
    id={name}
    fullWidth
    options={options}
    renderInput={(params) => (
      <TextField {...params} label={label} name={name} required={required} />
    )}
  />
)
