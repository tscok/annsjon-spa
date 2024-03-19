import { Route } from 'app/types'

export function getBreadcrumbs(route: Route, pathname: string) {
  const result: Route[] = []

  function getCrumbs(routes: Route[]) {
    const route = routes.find(({ path }) => pathname.startsWith(path))
    if (route) {
      result.push({ name: route.name, path: route.path })
    }
    if (route?.children) {
      return getCrumbs(route.children)
    }
    return result
  }

  return getCrumbs([route])
}
