import { useLocation } from 'react-router-dom'
import { alpha } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import { SiteTitle } from './site-title'
import { TabsNav } from '../navigation/tabs-nav'
import { Emoji } from '../misc/emoji'
import { useLanguage } from 'app/utils/use-language'
import { useRoutes } from 'app/utils/use-routes'
import { useTranslation } from 'app/i18n'

export const SiteHeader = () => {
  const t = useTranslation('site')
  const { nextLanguage, setLanguage } = useLanguage()
  const { pathname } = useLocation()
  const routes = useRoutes()

  const mainRoutes = routes.filter(
    (route) => !['/', '/iba', '/reports'].includes(route.path)
  )

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: (theme) => alpha(theme.palette.common.white, 0.9),
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <SiteTitle>{t('title')}</SiteTitle>
        <Box sx={{ flexGrow: 1 }} />
        <TabsNav pathname={pathname} routes={mainRoutes} />
        <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
          <Divider
            flexItem
            orientation="vertical"
            variant="middle"
            sx={{ height: '2rem', mx: 1, alignSelf: 'center' }}
          />
          <IconButton
            color="inherit"
            disableRipple
            onClick={() => setLanguage(nextLanguage.locale)}
          >
            <Emoji>{nextLanguage.emoji}</Emoji>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
