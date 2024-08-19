import MuiTextField from '@mui/material/TextField'

type TextFieldProps = {
  helperText?: string
  id: string
  label: string
  name: string
  onChange?: (value: string) => void
  required?: boolean
  type?: 'email' | 'tel'
  value?: string
}

type TextAreaProps = TextFieldProps & {
  defaultValue?: string
  minRows?: number
}

export const TextField = ({
  onChange,
  value = '',
  ...props
}: TextFieldProps) => (
  <MuiTextField
    {...props}
    autoComplete="off"
    fullWidth
    onChange={(event) => onChange?.(event.target.value)}
    value={value}
  />
)

export const TextArea = ({
  minRows = 3,
  onChange,
  value = '',
  ...props
}: TextAreaProps) => (
  <MuiTextField
    {...props}
    autoComplete="off"
    fullWidth
    minRows={minRows}
    multiline
    onChange={(event) => onChange?.(event.target.value)}
    value={props.defaultValue ? undefined : value}
  />
)
