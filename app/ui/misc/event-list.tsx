import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { H5 } from 'app/ui/text/heading'
import { PropsWithChildren } from 'react'

export const EventList = ({
  children,
  title,
}: PropsWithChildren<{ title: string }>) => {
  return (
    <List
      dense
      sx={{
        borderLeftStyle: 'solid',
        borderLeftColor: 'divider',
        borderLeftWidth: { xs: 0, md: '1px' },
        flex: 1,
      }}
      subheader={
        <ListItem>
          <H5>{title}</H5>
        </ListItem>
      }
    >
      {children}
    </List>
  )
}
