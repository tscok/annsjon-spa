import { PropsWithChildren } from 'react'
import Box from '@mui/material/Box'
import { alpha, Theme } from '@mui/material/styles'

type CreditProps = {
  content: string
  placement?: 'left' | 'right'
  variant?: 'dark' | 'light'
}

const getCreditStyle = (
  { content, placement = 'left', variant = 'dark' }: CreditProps,
  theme: Theme
) => {
  const bgColor = variant === 'dark' ? 'black' : 'white'
  const color = variant === 'dark' ? 'white' : 'black'
  return {
    '&:after': {
      content: `"${content}"`,
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: placement === 'left' && 0,
      right: placement === 'right' && 0,
      px: 1,
      py: 0.5,
      fontSize: '0.625rem',
      backgroundColor: alpha(theme.palette.common[bgColor], 0.35),
      color: theme.palette.common[color],
    },
  }
}

export const BackgroundImage = ({
  children,
  creditProps,
  height,
  margin,
  position = '50%',
  size = 'cover',
  src,
}: PropsWithChildren<{
  creditProps?: CreditProps
  height?: number
  margin?: string | number
  position?: string
  size?: string
  src: string
}>) => {
  return (
    <Box
      sx={(theme) => ({
        backgroundImage: `url("${src}")`,
        backgroundPosition: position,
        backgroundRepeat: 'no-repeat',
        backgroundSize: size,
        height,
        margin,
        position: 'relative',
        width: '100%',
        ...(creditProps && getCreditStyle(creditProps, theme)),
      })}
    >
      {children}
    </Box>
  )
}
