import { Link as RouterLink } from 'react-router-dom'
import ChevronRightSharpIcon from '@mui/icons-material/ChevronRightSharp'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { DateRange } from 'app/types'
import { isHistory, isOngoing } from 'app/utils/dates'
import { CalendarDates, DateIcon, MonthIcon } from './calendar-dates'

export type EventItemProps = {
  date: DateRange
  href: string
  title: string
}

export const EventItem = ({ date, href, title }: EventItemProps) => {
  const dateHasPassed = isHistory(date)
  const dateOngoing = isOngoing(date)

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
          {date.to ? <MonthIcon /> : <DateIcon />}
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={<Typography fontWeight={500}>{title}</Typography>}
        secondary={<CalendarDates from={date.from} to={date.to} />}
      />
      <ChevronRightSharpIcon />
    </ListItemButton>
  )
}
