import { Link as RouterLink } from 'react-router-dom'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { MediaCardType } from 'app/types'

type MediaCardProps<T extends string> = MediaCardType<T> & {
  ariaLabel: string
}

export function MediaCard<T extends string>({
  ariaLabel,
  body,
  id,
  media,
  title,
  to,
}: MediaCardProps<T>) {
  return (
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
        <Typography
          id={id}
          variant="h5"
          sx={{
            textDecoration: { xs: 'underline', md: 'none' },
          }}
        >
          {title}
        </Typography>
        <Typography component="p" sx={{ mt: 2 }}>
          {body}
        </Typography>
      </CardContent>
    </Card>
  )
}
