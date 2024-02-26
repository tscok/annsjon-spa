import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../../components/Heading'
import PageSection from '../../components/PageSection'

import useText from '../../utils/useText'

const css = {
  margin: '0 auto',
  maxWidth: '620px',
  textAlign: 'center',
}

const Event = ({ body, category, children, link, title, withBGColor }) => {
  const getText = useText()

  return (
    <PageSection styles={withBGColor ? { backgroundColor: '#f5f5f5' } : {}}>
      <article css={css}>
        {category && <Heading level="h6">{category}</Heading>}
        {title && <Heading level="h5">{title}</Heading>}
        {body && <p>{body}</p>}
        {link && <Link to={link}>{getText('read-more')}</Link>}
        {children}
      </article>
    </PageSection>
  )
}

Event.defaultProps = {
  body: undefined,
  category: undefined,
  children: null,
  link: undefined,
  title: undefined,
  withBGColor: false,
}

Event.propTypes = {
  body: PropTypes.string,
  category: PropTypes.string,
  children: PropTypes.node,
  link: PropTypes.string,
  title: PropTypes.string,
  withBGColor: PropTypes.bool,
}

export default Event
