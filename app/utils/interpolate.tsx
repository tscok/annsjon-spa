import { Fragment, ReactNode } from 'react'

export const interpolate = (
  text: string,
  values: Record<string, ReactNode>
) => {
  const pattern = /([$][0-9]+)/g
  const matches = text.match(pattern)
  const parts = text.split(pattern)

  if (!matches) {
    return text
  }

  return parts.map((part, index) => (
    <Fragment key={`${part}-${index}`}>
      {matches.includes(part) ? values[part] : part}
    </Fragment>
  ))
}
