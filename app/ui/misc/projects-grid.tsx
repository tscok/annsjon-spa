import Grid from '@mui/material/Unstable_Grid2'
import { MediaCard } from './media-card'
import { useProjects } from 'app/utils/use-projects'

export const ProjectsGrid = ({ wrap }: { wrap?: boolean }) => {
  const projects = useProjects()

  return (
    <Grid container columnSpacing={4} rowSpacing={3}>
      {projects.map((project) => (
        <Grid key={project.id} sm={wrap ? 6 : 4}>
          <MediaCard
            {...project}
            ariaLabel="project link"
            media={{
              height: 150,
              ...project.media,
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}
