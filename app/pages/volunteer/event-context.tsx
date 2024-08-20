import { createContext, PropsWithChildren, useContext } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useEvents } from 'app/utils/use-events'
import { Event } from 'app/types'

const EventContext = createContext<Event | undefined>(undefined)

export const EventProvider = ({ children }: PropsWithChildren) => {
  const events = useEvents()
  const [searchParams] = useSearchParams()
  const event = events.find((event) => searchParams.has(event.id))
  return <EventContext.Provider value={event}>{children}</EventContext.Provider>
}

export const useEvent = () => {
  return useContext(EventContext)
}
