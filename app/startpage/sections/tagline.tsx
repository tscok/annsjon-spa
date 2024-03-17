import { useTranslation } from '../../i18n'
import { PageSection } from '../../ui'
import { Typography } from '../../ui/mui'

export const Tagline = () => {
  const t = useTranslation('startpage')

  return (
    <PageSection color="primary.main">
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
