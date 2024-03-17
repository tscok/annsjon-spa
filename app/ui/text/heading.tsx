import { PropsWithChildren } from 'react'
import { Typography } from '../mui'

export const H2 = ({ children }: PropsWithChildren) => (
  <Typography variant="h2">{children}</Typography>
)

export const H3 = ({ children }: PropsWithChildren) => (
  <Typography variant="h3">{children}</Typography>
)

export const H4 = ({ children }: PropsWithChildren) => (
  <Typography variant="h4">{children}</Typography>
)

export const H5 = ({ children }: PropsWithChildren) => (
  <Typography variant="h5">{children}</Typography>
)

export const H6 = ({ children }: PropsWithChildren) => (
  <Typography variant="h6">{children}</Typography>
)
