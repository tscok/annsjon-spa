import { MDXComponents } from 'mdx/types'
import { A } from './text/a'
import { Blockquote } from './text/blockquote'
import { H2, H3, H4, H5 } from './text/heading'
import { P } from './text/p'
import { Hr } from './misc/hr'

export const MdxComponents: MDXComponents = {
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  hr: Hr,
  p: P,
  a: A,
  blockquote: Blockquote,
}
