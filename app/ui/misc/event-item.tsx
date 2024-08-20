import { Link as RouterLink } from 'react-router-dom'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { isHistory, isOngoing } from 'app/utils/dates'
import { CalendarDates, DateIcon, MonthIcon } from './calendar-dates'
import { Event } from 'app/types'

export const EventItem = ({ dates, href, title }: Omit<Event, 'id'>) => {
  const dateHasPassed = isHistory(dates)
  const dateOngoing = isOngoing(dates)

  return (
    <ListItemButton
      component={RouterLink}
      disabled={dateHasPassed}
      selected={dateOngoing}
      to={href}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            backgroundColor: dateHasPassed
              ? 'action.disabled'
              : 'primary.light',
          }}
        >
          {dates.to ? <MonthIcon /> : <DateIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={<Typography fontWeight={500}>{title}</Typography>}
        secondary={<CalendarDates from={dates.from} to={dates.to} />}
      />
      <ChevronRightSharpIcon />
    </ListItemButton>
  )
}
