import { Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'
import type { MDXContent } from 'mdx/types'
import { MdxComponents } from 'app/ui/mdx'
import { useLanguage } from 'app/language/use-language'

type Glob<T> = Record<string, () => Promise<T>>

const modules = import.meta.glob('./mdx/**/*.mdx') as Glob<MDXContent>

const dynamic = (fn: () => Promise<any>) => lazy<MDXContent>(fn)

export const Page = () => {
  const { locale } = useLanguage()
  const { pathname } = useLocation()

  const slug = pathname.slice(1)
  const fileName = `./mdx/${slug}-${locale}.mdx`
  const notFound = `./mdx/not-found-${locale}.mdx`

  const Content = dynamic(modules[fileName] || modules[notFound])

  return (
    <Suspense>
      <Content components={MdxComponents} />
    </Suspense>
  )
}
