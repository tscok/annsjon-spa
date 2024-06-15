import { DateRange } from 'app/types'

const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000

export function isHistory(date: DateRange) {
  return date.to
    ? Number(new Date()) > Number(new Date(date.to)) + TWENTY_FOUR_HOURS_MS
    : Number(new Date()) > Number(new Date(date.from)) + TWENTY_FOUR_HOURS_MS
}

export function isOngoing(date: DateRange) {
  return date.to
    ? Number(new Date()) > Number(new Date(date.from)) &&
        Number(new Date()) < Number(new Date(date.to)) + TWENTY_FOUR_HOURS_MS
    : Number(new Date()) > Number(new Date(date.from)) &&
        Number(new Date()) < Number(new Date(date.from)) + TWENTY_FOUR_HOURS_MS
}
