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

  return (
    <MenuList>
      <MenuItem component={RouterLink} to={route.path}>
        <ListItemText
          primary={route.name}
          primaryTypographyProps={{ fontWeight: 700 }}
        />
      </MenuItem>
      {route.children?.map((child) => (
        <div key={child.path}>
          <MenuItem
            component={RouterLink}
            selected={
              pathname === child.path ||
              (pathname.startsWith(child.path) && !child.children)
            }
            to={child.path}
          >
            <ListItemText disableTypography>
              <Typography noWrap>{child.name}</Typography>
            </ListItemText>
          </MenuItem>
          {pathname.startsWith(child.path) && child.children && (
            <MenuList dense disablePadding>
              {child.children?.map(({ name, path }) => (
                <MenuItem
                  key={path}
                  component={RouterLink}
                  selected={pathname === path}
                  to={path}
                  sx={{ pl: 4 }}
                >
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </MenuList>
          )}
        </div>
      ))}
    </MenuList>
  )
}
