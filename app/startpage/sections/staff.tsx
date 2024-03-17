import { Suspense, lazy } from 'react'
import type { MDXContent } from 'mdx/types'
import { useLanguage } from 'app/utils'
import { useTranslation } from 'app/i18n'
import { BackgroundImage, MdxComponents, PageSection } from 'app/ui'
import { Grid } from 'app/ui/mui'

type Glob<T> = Record<string, () => Promise<T>>

const modules = import.meta.glob('./mdx/**/*.mdx') as Glob<MDXContent>

const dynamic = (fn: () => Promise<any>) => lazy<MDXContent>(fn)

export const Staff = () => {
  const { locale } = useLanguage()
  const t = useTranslation('startpage')

  const fileName = `./mdx/staff-${locale}.mdx`
  const Content = dynamic(modules[fileName])

  return (
    <PageSection title={t('section-title.staff')}>
      <Grid container columnSpacing={4}>
        <Grid md={6}>
          <BackgroundImage
            height={280}
            position="50% 80%"
            src="/images/brushane_thomas-holmberg.jpg"
          />
        </Grid>
        <Grid md={6}>
          <Suspense>
            <Content components={MdxComponents} />
          </Suspense>
        </Grid>
      </Grid>
    </PageSection>
  )
}
