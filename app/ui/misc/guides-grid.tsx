import Grid from '@mui/material/Unstable_Grid2'
import { useDictionary } from 'app/i18n/use-dictionary'
import { guides, GuideName } from 'app/utils/guides'
import { MediaCard } from './media-card'

export const GuidesGrid = ({ exclude }: { exclude?: GuideName }) => {
  const t = useDictionary('startpage')

  const gridItems = guides.filter((guide) => guide.name !== exclude)

  return (
    <Grid container columnSpacing={4} rowSpacing={3}>
      {gridItems.map((gridItem) => (
        <Grid key={gridItem.id} sm={6}>
          <MediaCard
            ariaLabel="guide link"
            body={t(gridItem.body)}
            id={gridItem.id}
            media={{
              height: 200,
              ...gridItem.media,
            }}
            title={gridItem.title}
            to={gridItem.route}
          />
        </Grid>
      ))}
    </Grid>
  )
}
