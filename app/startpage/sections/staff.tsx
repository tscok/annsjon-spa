import { Suspense, lazy } from 'react'
import type { MDXContent } from 'mdx/types'
import { useLanguageContext } from '../../site/LanguageContext'
import { useTranslation } from '../../i18n'
import { BackgroundImage, MdxComponents, PageSection } from '../../ui'
import { Grid } from '../../ui/mui'

import imageSrc from '../../../assets/images/brushane_thomas-holmberg.jpg'

type Glob<T> = Record<string, () => Promise<T>>

const modules = import.meta.glob('./mdx/**/*.mdx') as Glob<MDXContent>

const dynamic = (fn: () => Promise<any>) => lazy<MDXContent>(fn)

export const Staff = () => {
  const { isEnglish } = useLanguageContext()
  const t = useTranslation('startpage')

  const lang = (isEnglish ? 'en' : 'sv') as string

  const fileName = `./mdx/staff-${lang}.mdx`

  const Content = dynamic(modules[fileName])

  return (
    <PageSection title={t('section-title.staff')}>
      <Grid container columnSpacing={4}>
        <Grid md={6}>
          <BackgroundImage height={280} position="50% 80%" src={imageSrc} />
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
