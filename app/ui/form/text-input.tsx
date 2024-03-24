import MuiTextField from '@mui/material/TextField'

type TextFieldProps = {
  label: string
  name: string
  readonly?: boolean
  required?: boolean
  type?: 'email' | 'tel' | 'text'
}

type TextAreaProps = TextFieldProps & {
  helperText?: string
  minRows?: number
}

export const TextField = (props: TextFieldProps) => (
  <MuiTextField
    {...props}
    autoComplete="off"
    fullWidth
    id={`${props.name}-text-field`}
    InputProps={{ readOnly: props.readonly }}
  />
)

export const TextArea = (props: TextAreaProps) => (
  <MuiTextField
    {...props}
    autoComplete="off"
    fullWidth
    id={`${props.name}-text-area`}
    InputProps={{ readOnly: props.readonly }}
    minRows={props.minRows ?? 2}
    multiline
  />
)
