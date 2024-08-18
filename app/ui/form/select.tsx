import { PropsWithChildren } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MuiSelect from '@mui/material/Select'

export const Select = ({
  children,
  defaultValue = '',
  label,
  name,
  onChange,
  value,
}: PropsWithChildren<{
  defaultValue?: string
  label: string
  name: string
  onChange?: (value: string) => void
  value?: string
}>) => (
  <FormControl fullWidth>
    <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
    <MuiSelect
      defaultValue={defaultValue}
      id={`select-${name}`}
      labelId={`select-${name}-label`}
      label={label}
      name={name}
      onChange={(event) => onChange?.(event.target.value)}
      value={value}
      variant="outlined"
    >
      {children}
    </MuiSelect>
  </FormControl>
)
