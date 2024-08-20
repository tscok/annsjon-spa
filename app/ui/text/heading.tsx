import Typography, { TypographyProps } from '@mui/material/Typography'

const Heading = (props: TypographyProps) => <Typography {...props} />

export const H2 = (props: TypographyProps) => (
  <Heading {...props} variant="h2" />
)

export const H3 = (props: TypographyProps) => (
  <Heading {...props} variant="h3" />
)

export const H4 = (props: TypographyProps) => (
  <Heading {...props} variant="h4" />
)

export const H5 = (props: TypographyProps) => (
  <Heading {...props} variant="h5" />
)

export const H6 = (props: TypographyProps) => (
  <Heading {...props} variant="h6" />
)
