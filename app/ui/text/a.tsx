import { PropsWithChildren } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link, { LinkProps } from '@mui/material/Link'

export const A = ({
  children,
  color,
  href = '',
  onClick,
  title,
  underline = 'always',
}: PropsWithChildren<Omit<LinkProps, 'ref'>>) => {
  const styles = {
    color: color,
    textDecorationColor: color,
  }

  if (title === 'download') {
    return (
      <Link download href={href} sx={styles}>
        {children}
      </Link>
    )
  }
  if (href?.startsWith('http')) {
    return (
      <Link
        href={href}
        rel="noopener noreferrer"
        sx={styles}
        target="_blank"
        underline={underline}
      >
        {children}
      </Link>
    )
  }
  if (href.startsWith('mailto:')) {
    return (
      <Link href={href} sx={styles} underline={underline}>
        {href.replace('mailto:', '')}
      </Link>
    )
  }
  if (href.startsWith('+')) {
    return (
      <Link href={`tel:${href}`} underline={underline}>
        {children}
      </Link>
    )
  }
  if (onClick) {
    return (
      <Link
        onClick={onClick}
        sx={{ ...styles, cursor: 'pointer' }}
        underline={underline}
      >
        {children}
      </Link>
    )
  }
  return (
    <Link component={RouterLink} sx={styles} to={href} underline={underline}>
      {children}
    </Link>
  )
}
