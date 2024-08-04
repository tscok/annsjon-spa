import { ReactNode } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { alpha } from '@mui/material/styles'

export type CollapsibleProps = {
  action?: ReactNode
  children?: ReactNode
  expanded?: boolean
  subtitle?: ReactNode
  title: string
}

export const Collapsible = ({
  action,
  children,
  expanded,
  subtitle,
  title,
}: CollapsibleProps) => (
  <Box my={3} mx={{ md: -2 }}>
    <Accordion
      expanded={expanded}
      disableGutters
      slotProps={{ transition: { unmountOnExit: true } }}
      variant="outlined"
      sx={{ borderColor: (theme) => alpha(theme.palette.primary.main, 0.35) }}
    >
      <AccordionSummary expandIcon={!expanded && <ExpandMoreIcon />}>
        <div>
          <Typography variant="h5">{title}</Typography>
          {subtitle}
        </div>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          py: 0,
          p: (theme) => theme.typography.body1,
        }}
      >
        {children}
      </AccordionDetails>
      {action && (
        <AccordionActions sx={{ justifyContent: 'start', p: 2, pt: 1 }}>
          {action}
        </AccordionActions>
      )}
    </Accordion>
  </Box>
)
