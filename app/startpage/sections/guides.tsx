import Grid from '@mui/material/Unstable_Grid2'
import { useDictionary } from 'app/i18n/use-dictionary'
import { PageSection } from 'app/ui/layout/page-section'
import { useLocation } from 'react-router-dom'
import { MediaCard } from 'app/ui/misc/media-card'

export const GuidesGrid = () => {
  const t = useDictionary('startpage')
  const { pathname } = useLocation()
  const isHomepage = pathname === '/'

  return (
    <Grid container columnSpacing={4} rowSpacing={3}>
      <Grid sm={6}>
        <MediaCard
          ariaLabel="guide link"
          body={t('guide.hogasen')}
          id="hogasen-guide"
          media={{
            height: 200,
            position: '50% 70%',
            src: '/images/dbeckasin3_steve-dahlfors.jpg',
          }}
          title="Högåsen"
          to="/guide/hogasen"
        />
      </Grid>
      <Grid sm={6}>
        <MediaCard
          ariaLabel="guide link"
          body={t('guide.storulvan')}
          id="storulvan-guide"
          media={{
            height: 200,
            position: '50% 30%',
            src: '/images/blahake_steve-dahlfors.jpg',
          }}
          title="Storulvån"
          to="/guide/storulvan"
        />
      </Grid>
      <Grid sm={6}>
        <MediaCard
          ariaLabel="guide link"
          body={t('guide.handol')}
          id="handol-guide"
          media={{
            height: 200,
            position: '50% 10%',
            src: '/images/bergfink_steve-dahlfors.jpg',
          }}
          title="Handöl"
          to="/guide/handol"
        />
      </Grid>
      <Grid sm={6}>
        <MediaCard
          ariaLabel="guide link"
          body={t('guide.ann')}
          id="ann-guide"
          media={{ height: 200, src: '/images/brushane_steve-dahlfors.jpg' }}
          title="Ånn"
          to="/guide/ann"
        />
      </Grid>
      {!isHomepage && (
        <Grid sm={6}>
          <MediaCard
            ariaLabel="guide link"
            body={t('guide.storlien')}
            id="storlien-guide"
            media={{ height: 200, src: '/images/dbeckasin_steve-dahlfors.jpg' }}
            title="Storlien"
            to="/guide/storlien"
          />
        </Grid>
      )}
    </Grid>
  )
}

export const Guides = () => {
  const t = useDictionary('startpage')

  return (
    <PageSection bgColor="light" title={t('section-title.guides')}>
      <GuidesGrid />
    </PageSection>
  )
}
