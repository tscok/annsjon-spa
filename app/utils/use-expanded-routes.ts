import { useEffect, useCallback, useState } from 'react'
import { Route } from 'app/types'

type ExpandedRoutes = Record<string, boolean>
type ToggleExpanded = (route: Route) => void

export function useExpandedRoutes(
  pathname: string,
  routes: Route[]
): [ExpandedRoutes, ToggleExpanded] {
  const [expanded, setExpanded] = useState<ExpandedRoutes>({})

  useEffect(() => {
    setExpanded(
      Object.fromEntries(
        routes
          .filter((route) => route.children)
          .map((route) => [route.path, pathname.startsWith(route.path)])
      )
    )
  }, [pathname, routes])

  const toggleExpanded = useCallback<ToggleExpanded>(
    (route: Route) => {
      setExpanded((prev) => ({ ...prev, [route.path]: !prev[route.path] }))
    },
    [routes]
  )

  return [expanded, toggleExpanded]
}
