import { PropsWithChildren } from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

function createId(str: string) {
  return str
    .toLowerCase()
    .replace(/[åä]/g, 'a')
    .replace(/[ö]/g, 'o')
    .replace(/[?]/g, '')
    .replace(/\s-\s/g, '-')
    .replace(/\s/g, '-')
}

const Heading = (props: TypographyProps) => (
  <Typography {...props} id={props.id ?? createId(props.children as string)} />
)

export const H2 = (props: PropsWithChildren) => (
  <Heading {...props} variant="h2" />
)

export const H3 = (props: PropsWithChildren) => (
  <Heading {...props} variant="h3" />
)

export const H4 = (props: PropsWithChildren) => (
  <Heading {...props} variant="h4" />
)

export const H5 = (props: PropsWithChildren) => (
  <Heading {...props} variant="h5" />
)

export const H6 = (props: PropsWithChildren) => (
  <Heading {...props} variant="h6" />
)
