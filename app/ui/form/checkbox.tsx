import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MuiCheckbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

export function Checkbox({
  checked,
  label,
  name,
  onChange,
}: {
  checked?: boolean
  label: string
  name: string
  onChange?: (value: boolean) => void
}) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={checked}
            onChange={(event) => onChange?.(event.target.checked)}
            size="small"
          />
        }
        label={<Typography noWrap>{label}</Typography>}
        name={name}
      />
    </FormGroup>
  )
}
