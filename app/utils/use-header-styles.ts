import { useMemo } from 'react'
import useScrollTrigger from '@mui/material/useScrollTrigger'

export function useHeaderStyles(pathname: string): {
  border: number
  opacity: number
} {
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 })

  return useMemo(() => {
    return {
      border: trigger || pathname !== '/' ? 1 : 0,
      opacity: trigger || pathname !== '/' ? 0.9 : 0,
    }
  }, [trigger, pathname])
}
