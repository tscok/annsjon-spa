import MuiTextField, { TextFieldProps } from '@mui/material/TextField'

export const TextField = (props: TextFieldProps) => (
  <MuiTextField {...props} autoComplete="off" fullWidth />
)

export const TextArea = ({
  readOnly,
  ...props
}: TextFieldProps & { readOnly?: boolean }) => (
  <TextField {...props} InputProps={{ readOnly }} minRows={2} multiline />
)
