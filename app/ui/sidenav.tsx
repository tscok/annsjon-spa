import { NavLink } from 'react-router-dom'
import { Route } from '../types'

export const Sidenav = ({ route }: { route: Route }) => (
  <>
    <ul style={{ listStyle: 'none' }}>
      <li>
        <NavLink to={route.path}>{route.name}</NavLink>
      </li>
      {route.children?.map(({ name, path }) => (
        <li key={path}>
          <NavLink to={path}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </>
)
