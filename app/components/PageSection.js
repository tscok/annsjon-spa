import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'

import Heading from './Heading'
import PageContent from './PageContent'

const base = css`
  padding: 60px 0;
`

const PageSection = ({ children, styles, title }) => (
  <section css={[base, styles]}>
    {title && (
      <Heading center level="h6">
        {title}
      </Heading>
    )}
    <PageContent>{children}</PageContent>
  </section>
)

PageSection.defaultProps = {
  styles: undefined,
  title: undefined,
}

PageSection.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.object,
  title: PropTypes.string,
}

export default PageSection
