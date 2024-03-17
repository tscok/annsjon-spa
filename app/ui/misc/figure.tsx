import { PropsWithChildren } from 'react'
import { Box, Typography } from '../mui'

export const Figure = ({
  caption,
  children,
}: PropsWithChildren<{ caption: string }>) => (
  <Box component="figure" sx={{ my: 3, mx: 0 }}>
    {children}
    <Typography component="figcaption" variant="caption">
      {caption}
    </Typography>
  </Box>
)

export const Image = ({ alt = '', src }: { alt?: string; src: string }) => (
  <img alt={alt} src={src} style={{ width: '100%', display: 'block' }} />
)

export const BackgroundImage = ({
  children,
  height,
  position = '50%',
  size = 'cover',
  src,
}: PropsWithChildren<{
  height?: number
  position?: string
  size?: string
  src: string
}>) => {
  return (
    <Box
      sx={{
        backgroundImage: `url('${src}')`,
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat',
        backgroundSize: size,
        width: '100%',
        height,
      }}
    >
      {children}
    </Box>
  )
}
