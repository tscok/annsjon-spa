import { Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'
import type { MDXProps } from 'mdx/types'
import { useLanguageContext } from '../site/LanguageContext'
import { Layout } from './layout'

type MDXComponentType = (props: MDXProps) => JSX.Element

type Glob<T> = Record<string, () => Promise<T>>

const modules = import.meta.glob('./mdx/**/*.mdx') as Glob<MDXComponentType>

const dynamic = (fn: () => Promise<any>) => lazy<MDXComponentType>(fn)

export const Page = () => {
  const { isEnglish } = useLanguageContext()
  const { pathname } = useLocation()

  const lang = (isEnglish ? 'en' : 'sv') as string
  const slug = pathname.slice(1)

  const fileName = `./mdx/${slug}-${lang}.mdx`
  const notFound = `./mdx/not-found-${lang}.mdx`

  const Content = dynamic(modules[fileName] || modules[notFound])

  return (
    <Layout>
      <Suspense fallback="Loading…">
        <Content />
      </Suspense>
    </Layout>
  )
}
