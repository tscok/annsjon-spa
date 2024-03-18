import Typography from '@mui/material/Typography'
import { Route } from 'app/types'
import { A } from '../text/a'

export const FooterNav = ({ routes }: { routes: Route[] }) =>
  routes.map((route) => (
    <A
      key={route.path}
      color="common.white"
      href={route.path}
      underline="hover"
    >
      <Typography
        variant="body2"
        sx={{
          fontSize: '0.75rem',
          fontWeight: 700,
          textTransform: 'uppercase',
        }}
      >
        {route.name}
      </Typography>
    </A>
  ))
