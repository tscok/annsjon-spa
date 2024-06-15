import { Suspense } from 'react'
import { useLocation } from 'react-router-dom'
import { MdxComponents } from 'app/ui/mdx'
import { useLanguage } from 'app/language/use-language'
import { MdxGlob, dynamic } from 'app/utils/dynamic-mdx'

const mdx = import.meta.glob('./mdx/**/*.mdx') as MdxGlob

export const Page = () => {
  const { language } = useLanguage()
  const { pathname } = useLocation()

  const slug = pathname.slice(1)
  const fileName = `./mdx/${slug}-${language.locale}.mdx`
  const notFound = `./mdx/not-found-${language.locale}.mdx`

  const Content = dynamic(mdx[fileName] || mdx[notFound])

  return (
    <Suspense>
      <Content components={MdxComponents} />
    </Suspense>
  )
}
