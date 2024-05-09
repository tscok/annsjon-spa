import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import { accommodators } from 'app/utils/accommodators'
import { A } from '../text/a'
import { Phone } from './phone'

export const Accommodation = () => (
  <List>
    {accommodators.map((accommodator) => (
      <ListItem key={accommodator.name} disableGutters>
        <ListItemText
          disableTypography
          primary={
            <Typography variant="body1" fontWeight={500}>
              {accommodator.name}
            </Typography>
          }
          secondary={
            <List disablePadding>
              {accommodator.url && (
                <ListItem disableGutters disablePadding>
                  <ListItemText
                    secondary={
                      <A href={accommodator.url}>{accommodator.url}</A>
                    }
                  />
                </ListItem>
              )}
              {accommodator.email && (
                <ListItem disableGutters disablePadding>
                  <ListItemText
                    secondary={<A href={`mailto:${accommodator.email}`} />}
                  />
                </ListItem>
              )}
              {accommodator.tel.map((phoneNumber) => (
                <ListItem key={phoneNumber} disableGutters disablePadding>
                  <ListItemText secondary={<Phone tel={phoneNumber} />} />
                </ListItem>
              ))}
            </List>
          }
        />
      </ListItem>
    ))}
  </List>
)
