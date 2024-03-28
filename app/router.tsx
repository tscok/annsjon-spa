import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorBoundary } from './ui/layout/error-boundary'
import { SiteLayout } from './ui/layout/site-layout'

const config = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
    element: <SiteLayout />,
    children: [
      {
        path: '/',
        lazy: async () => {
          let { StartPage } = await import('./startpage/startpage')
          return { Component: StartPage }
        },
      },
      {
        lazy: async () => {
          let { PageLayout } = await import('./ui/layout/page-layout')
          return { Component: PageLayout }
        },
        children: [
          {
            path: '/volunteer/application',
            lazy: async () => {
              let { Form } = await import('./pages/volunteer/form')
              return { Component: Form }
            },
          },
          {
            path: '/volunteer/application/sent',
            lazy: async () => {
              let { FormSent } = await import('./pages/volunteer/form-sent')
              return { Component: FormSent }
            },
          },
          {
            path: '/*',
            lazy: async () => {
              let { Page } = await import('./pages/page')
              return { Component: Page }
            },
          },
        ],
      },
    ],
  },
])

export const Router = () => <RouterProvider router={config} />
