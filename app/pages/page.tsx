import { Suspense, lazy } from 'react'
import { useLocation } from 'react-router-dom'
import type { MDXContent } from 'mdx/types'
import { useLanguageContext } from 'app/site/LanguageContext'
import { MdxComponents } from 'app/ui'

type Glob<T> = Record<string, () => Promise<T>>

const modules = import.meta.glob('./mdx/**/*.mdx') as Glob<MDXContent>

const dynamic = (fn: () => Promise<any>) => lazy<MDXContent>(fn)

export const Page = () => {
  const { isEnglish } = useLanguageContext()
  const { pathname } = useLocation()

  const lang = (isEnglish ? 'en' : 'sv') as string
  const slug = pathname.slice(1)

  const fileName = `./mdx/${slug}-${lang}.mdx`
  const notFound = `./mdx/not-found-${lang}.mdx`

  console.log({ modules, fileName })

  const Content = dynamic(modules[fileName] || modules[notFound])

  return (
    <Suspense>
      <Content components={MdxComponents} />
    </Suspense>
  )
}
