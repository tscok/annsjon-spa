import { isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useDictionary } from 'app/i18n/use-dictionary'
import { interpolate } from 'app/utils/interpolate'
import { PageContainer } from './page-container'
import { SiteLayout } from './site-layout'
import { H2, H3 } from '../text/heading'
import { P } from '../text/p'
import { A } from '../text/a'

export const ErrorBoundary = () => {
  const error = useRouteError()
  const t = useDictionary('errorBoundary')

  return (
    <SiteLayout>
      <PageContainer>
        <Box component="article" sx={{ gridColumnStart: 2 }}>
          <H2>{isRouteErrorResponse(error) ? error.status : t('status')}</H2>
          <H3>{t('title')}</H3>
          <P>
            {interpolate(t('body'), {
              $1: <A href="mailto:webmaster@annsjon.org" />,
            })}
          </P>
          <A href="/">{t('link')}</A>
        </Box>
      </PageContainer>
    </SiteLayout>
  )
}
