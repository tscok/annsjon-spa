import { ReactNode } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'
import { SiteMain } from './site-main'
import { CookieBanner } from './cookie-banner'

export const SiteLayout = ({ children }: { children?: ReactNode }) => (
  <>
    <Container disableGutters maxWidth="lg">
      <Paper elevation={3} square>
        <Stack minHeight="100vh">
          <SiteHeader />
          <SiteMain>
            {children ?? <Outlet />}
            <ScrollRestoration />
          </SiteMain>
          <SiteFooter />
        </Stack>
      </Paper>
    </Container>
    <CookieBanner />
  </>
)
