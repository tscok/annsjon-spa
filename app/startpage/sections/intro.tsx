import { Suspense } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useLanguage } from 'app/language/use-language'
import { PageSection } from 'app/ui/layout/page-section'
import { MdxComponents } from 'app/ui/mdx'
import { EventItem } from 'app/ui/misc/event-item'
import { MdxGlob, dynamic } from 'app/utils/dynamic-mdx'
import { useEvents } from 'app/utils/use-events'
import { EventList } from 'app/ui/misc/event-list'

const mdx = import.meta.glob('./mdx/**/*.mdx') as MdxGlob

export const Intro = () => {
  const t = useDictionary('startpage')
  const { language } = useLanguage()
  const events = useEvents()

  const fileName = `./mdx/intro-${language.locale}.mdx`
  const Content = dynamic(mdx[fileName])

  return (
    <PageSection>
      <Grid container columnSpacing={6} rowSpacing={3}>
        <Grid xs={12} sm={10} md={6}>
          <Box px={{ sm: 0, md: 3 }}>
            <Suspense>
              <Content components={MdxComponents} />
            </Suspense>
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <EventList title={t('events.title')}>
            {events.map((event) => (
              <EventItem key={event.id} {...event} />
            ))}
          </EventList>
        </Grid>
      </Grid>
    </PageSection>
  )
}
