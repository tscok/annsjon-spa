import { ReactNode } from 'react'

export function interpolate(
  text: string,
  values: Record<string, ReactNode>
): string | ReactNode[] {
  const pattern = /([$][0-9]+)/g
  const matches = text.match(pattern)
  const parts = text.split(pattern)

  if (!matches) {
    return text
  }

  return parts.map((part) => (matches.includes(part) ? values[part] : part))
}
