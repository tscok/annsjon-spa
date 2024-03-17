import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Container, Paper, Stack } from '../mui'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { SiteMain } from './site-main'

export const SiteLayout = () => (
  <Container disableGutters maxWidth="lg">
    <Paper elevation={2} square>
      <Stack minHeight="100vh">
        <SiteHeader />
        <SiteMain>
          <Outlet />
          <ScrollRestoration />
        </SiteMain>
        <SiteFooter />
      </Stack>
    </Paper>
  </Container>
)
