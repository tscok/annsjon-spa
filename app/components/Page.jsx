import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'

import PageContent from './PageContent'
import PageLayout from './PageLayout'

const styles = css`
  padding: 50px 0 100px;
`

const Page = ({ children, layout }) => (
  <div css={styles}>
    <PageContent>
      <PageLayout layout={layout}>{children}</PageLayout>
    </PageContent>
  </div>
)

Page.defaultProps = {
  layout: undefined,
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  layout: PropTypes.string,
}

export default Page
