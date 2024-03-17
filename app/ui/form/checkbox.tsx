import { FormGroup, Typography } from '@mui/material'
import MuiCheckbox from '@mui/material/Checkbox'
import { FormControlLabel } from '../mui'

export function Checkbox({
  label,
  name,
  value,
}: {
  label: string
  name: string
  value: string
}) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MuiCheckbox size="small" value={value} />}
        label={<Typography noWrap>{label}</Typography>}
        name={name}
      />
    </FormGroup>
  )
}
