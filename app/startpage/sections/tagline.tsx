import Typography from '@mui/material/Typography'
import { useDictionary } from 'app/i18n/use-dictionary'
import { PageSection } from 'app/ui/layout/page-section'

export const Tagline = () => {
  const t = useDictionary('startpage')

  return (
    <PageSection bgColor="dark">
      <Typography
        color="common.white"
        component="div"
        variant="h1"
        sx={{
          fontSize: '1.75rem',
          fontStyle: 'italic',
          textAlign: 'center',
        }}
      >
        {`\u201d${t('tagline')}\u201c`}
      </Typography>
    </PageSection>
  )
}
