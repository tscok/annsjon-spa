import { A, Image, PageSection } from '..'
import { useRoutes } from 'app/utils'
import { Avatar, Divider, Stack, Typography } from '../mui'

import logotype from 'app/assets/faf_logo_white.svg'

export const SiteFooter = () => {
  const routes = useRoutes()

  return (
    <PageSection color="primary.dark">
      <Stack direction="row" justifyContent="space-between">
        <Stack justifyContent="space-between">
          <Stack component="nav" direction="row" spacing={2}>
            {routes.map((route) => (
              <A
                key={route.path}
                color="common.white"
                href={route.path}
                underline="hover"
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                  }}
                >
                  {route.name}
                </Typography>
              </A>
            ))}
          </Stack>
          <Stack spacing={1}>
            <Stack alignItems="center" direction="row">
              <A color="common.white" underline="hover">
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ fontWeight: 500 }}
                >
                  English
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
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ fontWeight: 500 }}
                >
                  Cookies
                </Typography>
              </A>
            </Stack>
            <Typography
              color="rgba(255, 255, 255, 0.75)"
              variant="caption"
              sx={{ fontWeight: 500 }}
            >
              Design och utveckling av{' '}
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
            mr: 8,
          }}
        >
          <Image alt="FÅF logotype" src={logotype} />
        </Avatar>
      </Stack>
    </PageSection>
  )
}
