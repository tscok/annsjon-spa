import Divider from '@mui/material/Divider'

export const VerticalDivider = ({ light }: { light?: boolean }) => (
  <Divider
    flexItem
    orientation="vertical"
    variant="middle"
    sx={{
      height: '1rem',
      mx: 1,
      alignSelf: 'center',
      ...(light
        ? {
            borderColor: 'common.white',
            opacity: 0.5,
          }
        : {}),
    }}
  />
)
