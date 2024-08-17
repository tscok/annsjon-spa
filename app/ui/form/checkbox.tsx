import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import MuiCheckbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'

export function Checkbox({
  label,
  name,
  onChange,
  value,
}: {
  label: string
  name: string
  onChange?: (value: boolean) => void
  value?: boolean
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.target.checked)
  }

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <MuiCheckbox checked={value} onChange={handleChange} size="small" />
        }
        label={<Typography noWrap>{label}</Typography>}
        name={name}
      />
    </FormGroup>
  )
}
