import { PropsWithChildren } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import DateIcon from '@mui/icons-material/TodaySharp'
import MonthIcon from '@mui/icons-material/CalendarMonthSharp'
import { useFormatDate } from 'app/utils/use-format-date'
import { DateRange } from 'app/types'

const Icon = ({ endDate }: { endDate?: string }) =>
  endDate ? (
    <MonthIcon sx={{ fontSize: 22, color: 'text.secondary' }} />
  ) : (
    <DateIcon sx={{ fontSize: 22, color: 'text.secondary' }} />
  )

const Span = ({ children }: PropsWithChildren) => (
  <Typography color="text.secondary" component="span" variant="caption">
    {children}
  </Typography>
)

type DatesProps = DateRange & { withIcon?: boolean }

export const CalendarDates = ({ from, to, withIcon = false }: DatesProps) => {
  const formatDate = useFormatDate()
  return (
    <Stack component="span" direction="row" spacing={0.5}>
      {withIcon && <Icon endDate={to} />}
      <Span>{formatDate(from)}</Span>
      {to && (
        <>
          <Span>{`\u2013`}</Span>
          <Span>{formatDate(to)}</Span>
        </>
      )}
    </Stack>
  )
}

export { DateIcon, MonthIcon }
