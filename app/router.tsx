import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Page } from './pages/page'
import { StartPage } from './startpage/startpage'
import { Form } from './pages/volunteer/form'
import { FormSent } from './pages/volunteer/form-sent'
import { ErrorBoundary } from './ui/layout/error-boundary'
import { PageLayout } from './ui/layout/page-layout'
import { SiteLayout } from './ui/layout/site-layout'
import { sendFormLoader } from './utils/send-form-loader'

const config = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
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
            element: <Form />,
          },
          {
            path: '/volunteer/application/sent',
            element: <FormSent />,
            loader: sendFormLoader,
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
