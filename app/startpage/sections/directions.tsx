import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import Typography from '@mui/material/Typography'
import { useDictionary } from 'app/i18n/use-dictionary'
import { BackgroundImage } from 'app/ui/image/background-image'
import { A } from 'app/ui/text/a'

export const Directions = () => {
  const t = useDictionary('startpage')

  return (
    <BackgroundImage position="50% 80%" src="/images/road_mikael-carlsson.jpg">
      <Box
        sx={{
          px: 6,
          py: 8,
          backgroundColor: { xs: 'rgba(0, 0, 0, 0.5)', md: 'transparent' },
        }}
      >
        <Grid container columnSpacing={4}>
          <Grid md={6}></Grid>
          <Grid md={6}>
            <Typography variant="h3" sx={{ color: 'common.white' }}>
              {t('directions.title')}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'common.white', my: '1.25rem', fontWeight: 500 }}
            >
              {t('directions.body')}
              <A color="white" href="/volunteer/information">
                FAQ
              </A>
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: 'common.white', fontWeight: 500 }}
            >
              {t('directions.map')}
              <A
                color="white"
                href="https://www.google.se/maps/place/63%C2%B015'30.5%22N+12%C2%B026'51.0%22E/@60.3825553,1.0879701,4.66z/data=!4m2!3m1!1s0x0:0x0"
              >
                Google Maps
              </A>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </BackgroundImage>
  )
}
