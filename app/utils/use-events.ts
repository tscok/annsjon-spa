import { useDictionary } from 'app/i18n/use-dictionary'
import { Event } from 'app/types'

const events: Event[] = [
  {
    dates: { from: '2024-06-01' },
    href: '/events/open-house',
    id: 'open-house',
    title: 'event.open-house',
  },
  {
    dates: { from: '2024-06-02', to: '2024-06-16' },
    href: '/projects/surveys',
    id: 'surveys',
    title: 'event.survey',
  },
  {
    dates: { from: '2024-07-01', to: '2024-08-31' },
    href: '/projects/ringing',
    id: 'ringing',
    title: 'event.ringing',
  },
  // {
  //   dates: { from: '2024-08-24', to: '2024-09-02' },
  //   href: '/events/season-end',
  //   id: 'season-end',
  //   title: 'event.season-end',
  // },
]

export function useEvents(): Event[] {
  const t = useDictionary('startpage')

  return events.map((event) => ({
    ...event,
    title: t(event.title as keyof typeof t),
  }))
}
