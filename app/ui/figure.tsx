import { PropsWithChildren } from 'react'

export const Figure = ({
  caption = '',
  children,
}: PropsWithChildren<{ caption?: string }>) => (
  <figure style={{ margin: '0 0 2.5rem' }}>
    {children}
    <figcaption style={{ fontSize: '14px' }}>{caption}</figcaption>
  </figure>
)

export const Image = ({ alt = '', src }: { alt?: string; src: string }) => (
  <img alt={alt} src={src} style={{ width: '100%', display: 'block' }} />
)
