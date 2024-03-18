import { PropsWithChildren } from 'react'
import MuiMenuItem, { MenuItemProps } from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'

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
  <TextField
    defaultValue={defaultValue}
    fullWidth
    InputLabelProps={{ shrink: true }}
    label={label}
    name={name}
    select
  >
    {children}
  </TextField>
)

export const Option = (props: MenuItemProps) => <MuiMenuItem {...props} />
