import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useDictionary } from 'app/i18n/use-dictionary'
import { H2 } from 'app/ui/text/heading'
import { CalendarDates } from 'app/ui/misc/calendar-dates'
import { useEvent } from './event-context'

export const FormHeader = () => {
  const t = useDictionary('form')
  const event = useEvent()

  return (
    <Box mb="2rem">
      <H2 mb={0}>{t('title')}</H2>
      {event && (
        <Stack direction="row" spacing={0.5}>
          <Typography
            color="text.secondary"
            component="span"
            noWrap
            variant="caption"
          >
            {`${event.title}, `}
          </Typography>
          <CalendarDates {...event.dates} />
        </Stack>
      )}
    </Box>
  )
}
