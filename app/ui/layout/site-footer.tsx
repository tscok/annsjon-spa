import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { useLanguage } from 'app/utils/use-language'
import { useRoutes } from 'app/utils/use-routes'
import { FooterNav } from '../navigation/footer-nav'
import { A } from '../text/a'
import { Image } from '../image/image'
import { PageSection } from './page-section'

import logotype from 'app/assets/faf_logo_white.svg'
import { useTranslation } from 'app/i18n'

const LanguageAndCookies = () => {
  const { nextLanguage, setLanguage } = useLanguage()
  return (
    <>
      <A
        color="common.white"
        underline="hover"
        onClick={() => setLanguage(nextLanguage.locale)}
      >
        <Typography component="span" variant="body2" sx={{ fontWeight: 500 }}>
          {nextLanguage.name}
        </Typography>
      </A>
      <Divider
        flexItem
        orientation="vertical"
        variant="middle"
        sx={{
          height: '1rem',
          mx: 1,
          alignSelf: 'center',
          borderColor: 'common.white',
          opacity: 0.5,
        }}
      />
      <A color="common.white" href="/cookies" underline="hover">
        <Typography component="span" variant="body2" sx={{ fontWeight: 500 }}>
          Cookies
        </Typography>
      </A>
    </>
  )
}

export const SiteFooter = () => {
  const t = useTranslation('site')
  const routes = useRoutes()

  return (
    <PageSection color="primary.dark">
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
            spacing={2}
          >
            <FooterNav routes={routes} />
          </Stack>
          <Stack
            spacing={1}
            sx={{ mt: 4, alignItems: { xs: 'center', lg: 'start' } }}
          >
            <Stack alignItems="center" direction="row">
              <LanguageAndCookies />
            </Stack>
            <Typography
              color="rgba(255, 255, 255, 0.75)"
              variant="caption"
              sx={{ fontWeight: 500 }}
            >
              {t('design')}
              <A
                color="common.white"
                href="https://www.linkedin.com/in/mr-mike/"
                underline="always"
              >
                Mikael Carlsson
              </A>
            </Typography>
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
