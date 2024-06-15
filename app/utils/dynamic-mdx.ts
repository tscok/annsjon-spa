import { lazy } from 'react'
import type { MDXContent } from 'mdx/types'

type Glob<T> = Record<string, () => Promise<T>>

export type MdxGlob = Glob<MDXContent>

export const dynamic = (fn: () => Promise<any>) => lazy<MDXContent>(fn)
