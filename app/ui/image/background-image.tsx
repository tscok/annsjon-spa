import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'

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
        backgroundImage: `url("${src}")`,
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
