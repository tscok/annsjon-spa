import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PageLayout } from './ui/layout/page-layout'
import { SiteLayout } from './ui/layout/site-layout'
import { Application, Page } from './pages'
import { StartPage } from './startpage/startpage'

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
