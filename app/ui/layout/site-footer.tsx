import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import logotype from 'app/assets/faf_logo_white.svg'
import { useDictionary } from 'app/i18n/use-dictionary'
import { useLanguage } from 'app/language/use-language'
import { useRoutes } from 'app/utils/use-routes'
import { Divider } from '../misc/divider'
import { Image } from '../image/image'
import { A } from '../text/a'
import { PageSection } from './page-section'
import { FooterButton } from '../misc/footer-button'
import { interpolate } from 'app/utils/interpolate'

export const SiteFooter = () => {
  const { nextLanguage, changeLanguage } = useLanguage()
  const t = useDictionary('site')
  const routes = useRoutes()

  return (
    <PageSection bgColor="dark">
      <Stack
        alignItems="center"
        direction={{ xs: 'column', lg: 'row' }}
        justifyContent="space-between"
      >
        <Stack justifyContent="space-between">
          <Stack
            alignItems="center"
            component="nav"
            direction={{ xs: 'column', md: 'row' }}
            spacing={1}
          >
            {routes.map((route) => (
              <FooterButton
                key={route.path}
                aria-label={route.name}
                to={route.path}
              >
                {route.name}
              </FooterButton>
            ))}
          </Stack>
          <Stack sx={{ mt: 4, alignItems: { xs: 'center', lg: 'start' } }}>
            <Stack alignItems="center" direction="row">
              <FooterButton
                aria-label="change language"
                onClick={changeLanguage}
                size="small"
              >
                {nextLanguage.name}
              </FooterButton>
              <Divider light vertical />
              <FooterButton
                aria-label="about cookies"
                size="small"
                to="/cookies"
              >
                Cookies
              </FooterButton>
            </Stack>
            <div>
              <Typography
                color="common.white"
                variant="caption"
                sx={{ ml: 0.5 }}
              >
                {interpolate(t('webmaster'), {
                  $1: (
                    <A
                      color="inherit"
                      href="https://www.linkedin.com/in/mr-mike/"
                      underline="hover"
                    >
                      Mikael Carlsson
                    </A>
                  ),
                })}
              </Typography>
            </div>
          </Stack>
        </Stack>
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            opacity: 0.25,
            width: 150,
            height: 150,
            mr: { xs: 0, lg: 8 },
          }}
        >
          <Image alt="FÅF logotype" src={logotype} />
        </Avatar>
      </Stack>
    </PageSection>
  )
}
