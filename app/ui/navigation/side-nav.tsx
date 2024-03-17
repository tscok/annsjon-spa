import { Link as RouterLink } from 'react-router-dom'
import { Route } from '../../types'
import { ListItemText, MenuList, MenuItem } from '../mui'

export const SideNav = ({
  pathname,
  route,
}: {
  pathname: string
  route: Route
}) => {
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
            selected={pathname === child.path}
            to={child.path}
          >
            <ListItemText primary={child.name} />
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
