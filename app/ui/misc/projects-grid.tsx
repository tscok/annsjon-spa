import Grid from '@mui/material/Unstable_Grid2'
import { MediaCard } from './media-card'
import { ProjectName, useProjects } from 'app/utils/use-projects'

export const ProjectsGrid = ({
  columns = 2,
  exclude,
}: {
  columns?: number
  exclude?: ProjectName
}) => {
  const projects = useProjects(exclude)

  return (
    <Grid container columnSpacing={4} rowSpacing={3}>
      {projects.map((project) => (
        <Grid key={project.id} sm={12 / columns}>
          <MediaCard
            {...project}
            ariaLabel="project link"
            media={{
              height: 200,
              ...project.media,
            }}
          />
        </Grid>
      ))}
    </Grid>
  )
}
