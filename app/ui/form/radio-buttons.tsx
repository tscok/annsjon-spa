import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '../mui'

type Option = { label: string; value: string }

export const RadioButtons = ({
  label,
  name,
  options,
}: {
  label: string
  name: string
  options: Option[]
}) => (
  <FormControl fullWidth required>
    <FormLabel id={`${name}-label`}>{label}</FormLabel>
    <RadioGroup row aria-labelledby={`${name}-label`} name={name}>
      {options.map((option) => (
        <FormControlLabel
          key={option.label}
          {...option}
          control={<Radio size="small" />}
        />
      ))}
    </RadioGroup>
  </FormControl>
)
