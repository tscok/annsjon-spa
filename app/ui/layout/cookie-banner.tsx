import { useState } from 'react'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Fade from '@mui/material/Fade'
import Grid from '@mui/material/Unstable_Grid2'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import TrapFocus from '@mui/material/Unstable_TrapFocus'
import Typography from '@mui/material/Typography'
import { useLanguage } from 'app/language/use-language'
import { useDictionary } from 'app/i18n/use-dictionary'

export const CookieBanner = () => {
  const t = useDictionary('cookieDialog')
  const { cookiesEnabled, enableCookies } = useLanguage()
  const [open, setOpen] = useState(!cookiesEnabled)

  const handleDecline = () => {
    setOpen(false)
  }

  const handleAccept = () => {
    enableCookies()
    setOpen(false)
  }

  return (
    <TrapFocus open disableAutoFocus disableEnforceFocus>
      <Fade appear={false} in={open} mountOnEnter unmountOnExit>
        <Paper
          role="dialog"
          aria-modal="false"
          aria-label="Cookie banner"
          elevation={24}
          square
          tabIndex={-1}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: (theme) => theme.zIndex.modal,
          }}
        >
          <Container disableGutters maxWidth="lg">
            <Grid container rowSpacing={2} sx={{ px: { xs: 3, lg: 6 }, py: 5 }}>
              <Grid xs={12} md={8}>
                <Typography component="div" variant="h5">
                  {t('title')}
                </Typography>
                <Typography variant="body1" mt={3}>
                  {t('body.pt1')}
                </Typography>
                <Typography variant="body1" mt={2} mb={{ xs: 2, md: 0 }}>
                  {t('body.pt2')}
                </Typography>
              </Grid>
              <Grid
                xs={12}
                md={4}
                sx={{
                  alignItems: 'flex-end',
                  display: { xs: 'block', md: 'flex' },
                  justifyContent: 'flex-end',
                }}
              >
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <Button onClick={handleDecline}>{t('reject')}</Button>
                  <Button onClick={handleAccept} variant="contained">
                    {t('allow')}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </Fade>
    </TrapFocus>
  )
}
