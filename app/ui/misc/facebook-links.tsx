import FacebookSharpIcon from '@mui/icons-material/FacebookSharp'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { PropsWithChildren } from 'react'

// https://brandcolors.net/
const facebookColor = '#1877f2'

const FacebookLink = ({
  children,
  href,
}: PropsWithChildren<{ href: string }>) => (
  <ListItem disablePadding>
    <ListItemButton href={href} rel="noopener noreferrer" target="_blank">
      <ListItemIcon>
        <FacebookSharpIcon fontSize="large" htmlColor={facebookColor} />
      </ListItemIcon>
      <ListItemText primary={children} />
    </ListItemButton>
  </ListItem>
)

export const FacebookLinks = () => (
  <List>
    <FacebookLink href="https://www.facebook.com/Annsjon">
      Lake Ånnsjön Bird Observatory
    </FacebookLink>
    <FacebookLink href="https://www.facebook.com/groups/174058694282/">
      Friends of Lake Ånnsjön Bird Observatory
    </FacebookLink>
  </List>
)
