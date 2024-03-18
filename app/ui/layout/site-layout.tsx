import { Outlet, ScrollRestoration } from 'react-router-dom'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
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
