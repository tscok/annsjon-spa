import { PropsWithChildren } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Avatar, Link, Stack, Typography } from '../mui'
import { Image } from '../misc/figure'

import logotype from 'app/assets/faf_logo.svg'

export const SiteTitle = ({ children }: PropsWithChildren) => (
  <Link component={RouterLink} to="/" underline="none">
    <Stack alignItems="center" direction="row" spacing={1}>
      <Avatar sx={{ backgroundColor: 'transparent', width: 56, height: 56 }}>
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
