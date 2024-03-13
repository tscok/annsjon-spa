import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Application, Page } from './pages'
import { StartPage } from './startpage'
import { PageLayout, SiteLayout } from './ui'

const config = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      {
        path: '/',
        element: <StartPage />,
      },
      {
        element: <PageLayout />,
        children: [
          {
            path: '/volunteer/application',
            element: <Application />,
          },
          {
            path: '/*',
            element: <Page />,
          },
        ],
      },
    ],
  },
])

export const Router = () => <RouterProvider router={config} />
