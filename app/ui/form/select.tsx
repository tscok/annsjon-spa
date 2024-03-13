import { MenuItem, TextField } from '@mui/material'

type SelectProps = {
  defaultValue: string
  label: string
  name: string
  options?: { label: string; value: string }[]
  required?: boolean
}

export const Select = ({ options, ...props }: SelectProps) => (
  <TextField {...props} fullWidth InputLabelProps={{ shrink: true }} select>
    {options?.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </TextField>
)
