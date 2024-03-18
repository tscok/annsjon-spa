import MuiButton, { ButtonProps } from '@mui/material/Button'

export const SubmitButton = (props: ButtonProps) => (
  <MuiButton
    {...props}
    disableElevation
    size="large"
    type="submit"
    variant="contained"
  />
)
