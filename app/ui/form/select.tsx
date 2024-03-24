import { PropsWithChildren } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import MuiSelect from '@mui/material/Select'

export const Select = ({
  children,
  defaultValue,
  label,
  name,
}: PropsWithChildren<{
  defaultValue: string
  label: string
  name: string
}>) => (
  <FormControl fullWidth>
    <InputLabel id={`select-${name}-label`}>{label}</InputLabel>
    <MuiSelect
      defaultValue={defaultValue}
      id={`select-${name}`}
      labelId={`select-${name}-label`}
      label={label}
      name={name}
      variant="outlined"
    >
      {children}
    </MuiSelect>
  </FormControl>
)

export const Option = ({
  children,
  value,
}: PropsWithChildren<{ value: string }>) => (
  <MenuItem id={`${value}-option`} value={value}>
    {children}
  </MenuItem>
)
