import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { RootLayout } from './root-layout'
import { Application, Page, PageLayout, StartPage } from './pages'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
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

export const AppRouter = () => <RouterProvider router={router} />
