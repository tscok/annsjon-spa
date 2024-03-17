import { useLocation } from 'react-router-dom'
import { alpha, AppBar, Box, Divider, IconButton, Toolbar } from '../mui'
import { SiteTitle } from './site-title'
import { TabsNav } from '../navigation'
import { Emoji } from '../misc/emoji'
import { useRoutes } from 'app/utils'

export const SiteHeader = () => {
  const { pathname } = useLocation()
  const routes = useRoutes()
  const mainRoutes = routes.filter(
    (route) => !['/', '/iba', '/reports'].includes(route.path)
  )

  const handleChangeLocale = () => {}

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
        <SiteTitle>Ånnsjöns Fågelstation</SiteTitle>
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
            onClick={handleChangeLocale}
          >
            <Emoji>'🇬🇧'</Emoji>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
