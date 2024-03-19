import { Fragment, useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import { Language, Route } from 'app/types'
import { useExpandedRoutes } from 'app/utils/use-expanded-routes'
import { Emoji } from '../misc/emoji'

export const MobileNav = ({
  nextLanguage,
  onChangeLanguage,
  pathname,
  routes,
}: {
  nextLanguage: Language
  onChangeLanguage: () => void
  pathname: string
  routes: Route[]
}) => {
  const [expanded, toggleExpanded] = useExpandedRoutes(pathname, routes)
  const [open, setOpen] = useState(false)

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box width={300}>
          <List component="nav">
            {routes.map((route) => (
              <Fragment key={route.path}>
                <ListItem
                  disablePadding
                  secondaryAction={
                    route.children && (
                      <IconButton onClick={() => toggleExpanded(route)}>
                        {expanded[route.path] ? <ExpandLess /> : <ExpandMore />}
                      </IconButton>
                    )
                  }
                >
                  <ListItemButton
                    component={RouterLink}
                    onClick={() => setOpen(false)}
                    selected={route.path !== '/' && pathname === route.path}
                    to={route.path}
                  >
                    <ListItemText
                      primary={route.name}
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </ListItemButton>
                </ListItem>
                {route.children && (
                  <Collapse
                    in={expanded[route.path]}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {route.children.map((child) => (
                        <ListItemButton
                          key={child.path}
                          component={RouterLink}
                          onClick={() => setOpen(false)}
                          selected={pathname === child.path}
                          sx={{ pl: 4 }}
                          to={child.path}
                        >
                          <ListItemText primary={child.name} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Fragment>
            ))}
          </List>
          <Divider />
          <List component="div">
            <ListItem disablePadding>
              <ListItemButton onClick={onChangeLanguage}>
                <ListItemIcon sx={{ color: 'inherit', minWidth: '32px' }}>
                  <Emoji>{nextLanguage.emoji}</Emoji>
                </ListItemIcon>
                <ListItemText
                  primary={nextLanguage.name}
                  primaryTypographyProps={{ fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  )
}
