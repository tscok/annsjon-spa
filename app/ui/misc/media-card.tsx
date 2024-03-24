import { Link as RouterLink } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

type MediaProps = {
  height?: number
  position?: string
  src: string
}

export const MediaCard = ({
  ariaLabel,
  body,
  id,
  media,
  title,
  to,
}: {
  ariaLabel: string
  body: string
  id: string
  media: MediaProps
  title: string
  to: string
}) => (
  <Card
    aria-label={ariaLabel}
    aria-labelledby={id}
    component={RouterLink}
    elevation={0}
    square
    sx={{
      flex: 1,
      textDecoration: 'none',
      '&:hover h5': { textDecoration: 'underline' },
    }}
    to={to}
  >
    <CardMedia
      component="div"
      image={media.src}
      sx={{
        backgroundPosition: media.position,
        height: media.height ?? 150,
      }}
    />
    <CardContent sx={{ px: 0 }}>
      <Typography id={id} variant="h5">
        {title}
      </Typography>
      <Typography component="p" sx={{ mt: 2 }}>
        {body}
      </Typography>
    </CardContent>
  </Card>
)
