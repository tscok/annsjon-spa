import dayjs from 'dayjs'
import { DateRange } from 'app/types'

export function isHistory(date: DateRange) {
  return dayjs() > dayjs(date.to ?? date.from).endOf('day')
}

export function isOngoing(date: DateRange) {
  return dayjs() > dayjs(date.from) && !isHistory(date)
}
