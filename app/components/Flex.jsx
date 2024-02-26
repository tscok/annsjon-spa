import PropTypes from 'prop-types'
import React from 'react'

const Flex = ({ alignItems, children, flex, flexDirection, justifyContent }) => (
  <div
    css={{
      alignItems,
      display: 'flex',
      flex,
      flexDirection,
      justifyContent,
    }}
  >
    {children}
  </div>
)

Flex.defaultProps = {
  alignItems: undefined,
  flex: undefined,
  flexDirection: 'row',
  justifyContent: undefined,
}

Flex.propTypes = {
  alignItems: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.node.isRequired,
  flex: PropTypes.string,
  flexDirection: PropTypes.oneOf(['column', 'row']),
  justifyContent: PropTypes.oneOf(['start', 'center', 'end']),
}

export default Flex
