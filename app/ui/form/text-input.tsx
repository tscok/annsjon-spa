import MuiTextField, { TextFieldProps } from '@mui/material/TextField'

export const TextField = (props: TextFieldProps) => (
  <MuiTextField {...props} autoComplete="off" fullWidth />
)

export const TextArea = ({
  readOnly,
  minRows = 2,
  ...props
}: TextFieldProps & { readOnly?: boolean }) => (
  <TextField {...props} InputProps={{ readOnly }} minRows={minRows} multiline />
)
