import { PropsWithChildren } from 'react'
import Page from '../components/Page'

export const Layout = ({ children }: PropsWithChildren) => (
  <Page>
    <article>{children}</article>
  </Page>
)
