import { Link as RouterLink } from 'react-router-dom'
import Button from '@mui/material/Button'
import MuiBreadcrumbs from '@mui/material/Breadcrumbs'
import { useDictionary } from 'app/i18n/use-dictionary'
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
  const t = useDictionary('pages')

  return (
    <MuiBreadcrumbs aria-label="breadcrumb" sx={{ mb: 2, ml: -1 }}>
      <Button component={RouterLink} sx={{ textTransform: 'none' }} to="/">
        {t('home')}
      </Button>
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
