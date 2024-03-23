import { PropsWithChildren } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem, { MenuItemProps } from '@mui/material/MenuItem'
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
    <InputLabel id="select-label">Age</InputLabel>
    <MuiSelect
      defaultValue={defaultValue}
      labelId="select-label"
      label={label}
      name={name}
      variant="outlined"
    >
      {children}
    </MuiSelect>
  </FormControl>
)

export const Option = (props: MenuItemProps) => <MenuItem {...props} />
