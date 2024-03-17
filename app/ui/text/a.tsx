import { PropsWithChildren } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { type LinkProps, Link } from '../mui'

export const A = ({
  children,
  color,
  href = '',
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
      <Link href={href} rel="noopener noreferrer" sx={styles} target="_blank">
        {children}
      </Link>
    )
  }
  if (href.startsWith('mailto:')) {
    return (
      <Link href={href} sx={styles}>
        {href.replace('mailto:', '')}
      </Link>
    )
  }
  return (
    <Link component={RouterLink} sx={styles} to={href} underline={underline}>
      {children}
    </Link>
  )
}
