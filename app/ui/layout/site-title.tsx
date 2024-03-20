import { PropsWithChildren } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { Image } from '../image/image'

import logotype from 'app/assets/faf_logo.svg'

const size = { sm: 40, lg: 56 }

export const SiteTitle = ({ children }: PropsWithChildren) => (
  <Link component={RouterLink} to="/" underline="none">
    <Stack alignItems="center" direction="row" spacing={1}>
      <Avatar
        sx={{ backgroundColor: 'transparent', width: size, height: size }}
      >
        <Image alt="FÅF logotype" src={logotype} />
      </Avatar>
      <Typography
        sx={{
          color: 'common.black',
          userSelect: 'none',
          fontSize: { xs: '1rem', sm: '1.2rem', lg: '1.5rem' },
        }}
        variant="h1"
      >
        {children}
      </Typography>
    </Stack>
  </Link>
)
