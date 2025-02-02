import { Suspense } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useLanguage } from 'app/language/use-language'
import { PageSection } from 'app/ui/layout/page-section'
import { MdxComponents } from 'app/ui/mdx'
import { EventItem, EventItemProps } from 'app/ui/misc/event-item'
import { H5 } from 'app/ui/text/heading'
import { MdxGlob, dynamic } from 'app/utils/dynamic-mdx'

const mdx = import.meta.glob('./mdx/**/*.mdx') as MdxGlob

export const Intro = () => {
  const t = useDictionary('startpage')
  const { language } = useLanguage()

  const fileName = `./mdx/intro-${language.locale}.mdx`
  const Content = dynamic(mdx[fileName])

  const events: EventItemProps[] = [
    {
      date: { from: '2025-06-07' },
      title: t('event.open-house'),
      href: '/events/open-house',
    },
    {
      date: { from: '2025-06-01', to: '2025-06-15' },
      title: t('event.survey'),
      href: '/projects/surveys',
    },
    {
      date: { from: '2025-06-30', to: '2025-09-15' },
      title: t('event.ringing'),
      href: '/projects/ringing',
    },
  ]

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
          <List
            dense
            sx={{
              borderLeftStyle: 'solid',
              borderLeftColor: 'divider',
              borderLeftWidth: { xs: 0, md: '1px' },
              flex: 1,
            }}
            subheader={
              <ListItem>
                <H5>{t('events.title')}</H5>
              </ListItem>
            }
          >
            {events.map((event) => (
              <EventItem key={event.title} {...event} />
            ))}
          </List>
        </Grid>
      </Grid>
    </PageSection>
  )
}
