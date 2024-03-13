import { TextField } from '../mui'

type TextInputProps = {
  hint?: string
  label: string
  minRows?: number
  multiline?: boolean
  name: string
  required?: boolean
}

export const TextInput = ({ hint, ...props }: TextInputProps) => (
  <TextField {...props} autoComplete="off" fullWidth helperText={hint} />
)
