import { MDXComponents } from 'mdx/types'
import { A, Blockquote, H2, H3, H4, H5, P } from './text'
import { Hr } from './misc'

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
