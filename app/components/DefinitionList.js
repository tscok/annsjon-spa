import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const Definition = ({ children, term }) => (
  <Fragment>
    <dt>{term}</dt>
    <dd>{children}</dd>
  </Fragment>
)

Definition.propTypes = {
  children: PropTypes.node.isRequired,
  term: PropTypes.node.isRequired,
}

const DefinitionList = ({ children, columns, gap }) => (
  <dl
    css={{
      display: 'grid',
      gap,
      gridTemplateColumns: columns,
      dt: { fontWeight: 'bold' },
    }}
  >
    {children}
  </dl>
)

DefinitionList.defaultProps = {
  columns: '1fr auto',
  gap: undefined,
}

DefinitionList.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.string,
  gap: PropTypes.string,
}

export { Definition }

export default DefinitionList
