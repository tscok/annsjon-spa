import { Link as RouterLink } from 'react-router-dom'
import ListItemText from '@mui/material/ListItemText'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { Theme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Route } from 'app/types'
import { Breadcrumbs } from './breadcrumbs'

export const SideNav = ({
  pathname,
  route,
}: {
  pathname: string
  route: Route
}) => {
  const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'))

  if (isMobile) {
    return <Breadcrumbs pathname={pathname} route={route} />
  }

  // site-header height + page-container paddingTop
  const SIDENAV_TOP_POSITION = 'calc(65px + (6 * 8px))'

  return (
    <MenuList
      sx={{
        borderRight: '1px solid',
        borderColor: 'divider',
        position: 'sticky',
        top: SIDENAV_TOP_POSITION,
      }}
    >
      <MenuItem
        aria-labelledby="side-nav-current-route"
        component={RouterLink}
        to={route.path}
      >
        <ListItemText
          id="side-nav-current-route"
          primary={route.name}
          primaryTypographyProps={{ fontWeight: 700 }}
        />
      </MenuItem>
      {route.children?.map((child) => (
        <div key={child.path}>
          <MenuItem
            aria-labelledby="side-nav-second-level-route"
            component={RouterLink}
            selected={
              pathname === child.path ||
              (pathname.startsWith(child.path) && !child.children)
            }
            to={child.path}
          >
            <ListItemText id="side-nav-second-level-route" disableTypography>
              <Typography noWrap>{child.name}</Typography>
            </ListItemText>
          </MenuItem>
          {pathname.startsWith(child.path) && child.children && (
            <MenuList dense disablePadding>
              {child.children?.map(({ name, path }) => (
                <MenuItem
                  key={path}
                  aria-labelledby="side-nav-third-level-route"
                  component={RouterLink}
                  selected={pathname === path}
                  to={path}
                  sx={{ pl: 4 }}
                >
                  <ListItemText
                    id="side-nav-third-level-route"
                    primary={name}
                  />
                </MenuItem>
              ))}
            </MenuList>
          )}
        </div>
      ))}
    </MenuList>
  )
}
