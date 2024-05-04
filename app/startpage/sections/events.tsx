import { PropsWithChildren } from 'react'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import { useDictionary } from 'app/i18n/use-dictionary'
import { PageSection } from 'app/ui/layout/page-section'
import { A } from 'app/ui/text/a'
import { interpolate } from 'app/utils/interpolate'

const EventItem = ({
  children,
  image,
  title,
}: PropsWithChildren<{
  image: string
  title: string
}>) => (
  <ListItem disableGutters>
    <ListItemAvatar
      sx={{ display: { xs: 'none', md: 'flex' }, mr: { xs: 0, md: 3 } }}
    >
      <Avatar src={image} sx={{ width: 100, height: 100 }} />
    </ListItemAvatar>
    <ListItemText
      primary={title}
      primaryTypographyProps={{ fontWeight: 700 }}
      secondary={children}
      secondaryTypographyProps={{ color: 'primary.text' }}
    />
  </ListItem>
)

export const Events = () => {
  const t = useDictionary('startpage')

  return (
    <PageSection title={`${t('section-title.events')} 2024`}>
      <List
        disablePadding
        sx={{
          maxWidth: { xs: '100%', md: '65%', lg: '70%' },
          margin: '0 auto',
        }}
      >
        <EventItem
          image="/images/annsjodagen_mikael-carlsson.jpg"
          title={t('event.open-house.title')}
        >
          {t('event.open-house.body')}
          <br />
          <A href="/open-house">{t('event.open-house.link')}</A>
        </EventItem>
        <EventItem
          image="/images/brushane_thomas-holmberg.jpg"
          title={t('event.survey.title')}
        >
          {t('event.survey.body')}{' '}
          {interpolate(t('event.survey.link'), {
            $1: <A href="mailto:info@annsjon.org">info@annsjon.org</A>,
          })}
        </EventItem>
        <EventItem
          image="/images/ringing2_mikael-carlsson.jpg"
          title={t('event.ringing.title')}
        >
          {t('event.ringing.body')}
          <br />
          <A href="/volunteer/application">{t('event.ringing.link')}</A>
        </EventItem>
      </List>
    </PageSection>
  )
}
