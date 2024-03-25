import { useLocation } from 'react-router-dom'
import { alpha, Theme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useLanguage } from 'app/language/use-language'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useRoutes } from 'app/utils/use-routes'
import { useHeaderStyles } from 'app/utils/use-header-styles'
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
  const { border, opacity } = useHeaderStyles(pathname)

  const mainRoutes = routes.filter(
    (route) => !['/', '/iba', '/reports'].includes(route.path)
  )

  return (
    <AppBar
      elevation={0}
      position="sticky"
      sx={{
        backdropFilter: 'blur(8px)',
        backgroundColor: (theme) => alpha(theme.palette.common.white, opacity),
        borderBottom: border,
        borderColor: 'divider',
        transition: 'all 150ms ease-in-out',
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
        <Box alignItems="center" display="flex">
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
    </AppBar>
  )
}
