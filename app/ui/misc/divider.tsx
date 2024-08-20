import MuiDivider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import { PropsWithChildren } from 'react'

type DividerProps = PropsWithChildren & {
  light?: boolean
  vertical?: boolean
}

function getColorStyle(light?: boolean) {
  return light
    ? {
        borderColor: 'common.white',
        opacity: 0.5,
      }
    : {}
}

export const Divider = ({ children, light, vertical }: DividerProps) => {
  if (vertical) {
    return (
      <MuiDivider
        flexItem
        orientation="vertical"
        variant="middle"
        sx={{ mx: 1, ...getColorStyle(light) }}
      />
    )
  }
  return (
    <Hr>
      {children && (
        <Typography variant="caption" color="GrayText">
          {children}
        </Typography>
      )}
    </Hr>
  )
}

export const Hr = (props: PropsWithChildren) => (
  <MuiDivider {...props} sx={{ my: 4 }} />
)
