export const Image = ({ alt = '', src }: { alt?: string; src: string }) => (
  <img alt={alt} src={src} style={{ width: '100%', display: 'block' }} />
)
