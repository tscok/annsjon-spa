import { useLocation } from 'react-router-dom'
import { Theme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { useLanguage } from 'app/language/use-language'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useRoutes } from 'app/utils/use-routes'
import { MobileNav } from '../navigation/mobile-nav'
import { TabletNav } from '../navigation/tablet-nav'
import { Emoji } from '../misc/emoji'
import { VerticalDivider } from '../misc/vertical-divider'
import { SiteTitle } from './site-title'

export const SiteHeader = () => {
  const t = useDictionary('site')
  const { changeLanguage, nextLanguage } = useLanguage()
  const { pathname } = useLocation()
  const routes = useRoutes()
  const isMobile = useMediaQuery<Theme>((theme) => theme.breakpoints.down('md'))
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 })

  const mainRoutes = routes.filter(
    (route) => !['/', '/iba', '/reports'].includes(route.path)
  )

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        backgroundColor: 'background.paper',
        boxShadow: trigger ? '0px 2px 14px -2px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <Toolbar>
        <SiteTitle>{t('title')}</SiteTitle>
        <Box sx={{ flexGrow: 1 }} />
        {isMobile ? (
          <MobileNav
            nextLanguage={nextLanguage}
            onChangeLanguage={changeLanguage}
            pathname={pathname}
            routes={routes}
          />
        ) : (
          <TabletNav pathname={pathname} routes={mainRoutes} />
        )}
        <Box alignItems="center" display={{ xs: 'none', sm: 'flex' }}>
          <VerticalDivider />
          <IconButton
            aria-label="change language"
            color="inherit"
            onClick={changeLanguage}
          >
            <Emoji>{nextLanguage.emoji}</Emoji>
          </IconButton>
        </Box>
      </Toolbar>
      <Divider sx={{ mt: '-1px' }} />
    </AppBar>
  )
}
