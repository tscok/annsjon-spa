import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MuiCheckbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

export function Checkbox({ label, name }: { label: string; name: string }) {
  return (
    <FormGroup>
      <FormControlLabel
        control={<MuiCheckbox size="small" />}
        label={<Typography noWrap>{label}</Typography>}
        name={name}
      />
    </FormGroup>
  )
}
