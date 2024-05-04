import Grid from '@mui/material/Unstable_Grid2'
import { useGuides, GuideName } from 'app/utils/use-guides'
import { MediaCard } from './media-card'

export const GuidesGrid = ({ exclude }: { exclude?: GuideName }) => {
  const guides = useGuides(exclude)

  return (
    <Grid container columnSpacing={4} rowSpacing={3}>
      {guides.map((guide) => (
        <Grid key={guide.id} sm={6}>
          <MediaCard
            {...guide}
            ariaLabel="guide link"
            media={{
              height: 200,
              ...guide.media,
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}
