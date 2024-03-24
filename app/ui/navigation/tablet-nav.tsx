import { Link as RouterLink } from 'react-router-dom'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import { Route } from 'app/types'
import { sans } from '../theme/fonts'

export const TabletNav = ({
  pathname,
  routes,
}: {
  pathname: string
  routes: Route[]
}) => {
  const paths = routes.map((route) => route.path)
  const activePath = paths.find((path) => pathname.startsWith(path))

  return (
    <Tabs
      component="nav"
      value={activePath ?? false}
      sx={{
        alignItems: 'center',
        alignSelf: 'stretch',
        '.MuiTabs-scroller': {
          display: 'inline-flex',
          alignSelf: 'stretch',
        },
      }}
    >
      {routes.map((route) => (
        <Tab
          aria-label={route.name}
          key={route.path}
          component={RouterLink}
          to={route.path}
          label={route.name}
          sx={{
            color: 'text.primary',
            fontFamily: sans,
            fontSize: '0.7625rem',
            minWidth: 0,
            textTransform: 'uppercase',
            px: { md: 1.5, lg: 2 },
          }}
          value={route.path}
        />
      ))}
    </Tabs>
  )
}
