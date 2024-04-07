import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import { Route } from 'app/types'
import { getBreadcrumbs } from 'app/utils/get-breadcrumbs'

export const Breadcrumbs = ({
  pathname,
  route,
}: {
  pathname: string
  route: Route
}) => {
  const breadcrumbs = getBreadcrumbs(route, pathname)

  if (breadcrumbs.length === 1) {
    return null
  }

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" maxItems={3} sx={{ mb: 2, ml: -1 }}>
      {breadcrumbs.map((route, index) => {
        const isLast = index === breadcrumbs.length - 1

        return (
          <Button
            key={route.path}
            aria-current={isLast}
            component={RouterLink}
            disabled={isLast}
            sx={{ minWidth: 0, textTransform: 'none' }}
            to={route.path}
          >
            {route.name}
          </Button>
        )
      })}
    </MuiBreadcrumbs>
  )
}
