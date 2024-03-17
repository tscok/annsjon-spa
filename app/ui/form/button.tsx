import MuiButton, { ButtonProps } from '@mui/material/Button'

export const Button = ({ children, ...props }: ButtonProps) => (
  <MuiButton variant="contained" {...props}>
    {children}
  </MuiButton>
)
