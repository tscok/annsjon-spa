import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'

const levels = {
  h1: { fontSize: '32px', lineHeight: '40px' },
  h5: { fontSize: '18px', lineHeight: '28px', fontWeight: 400 },
  h6: {
    fontSize: '14px',
    lineHeight: '20px',
    marginBottom: '60px',
    textTransform: 'uppercase',
  },
}

const Heading = ({ center, children, color, level }) => {
  const css = {
    color,
    ...levels[level],
    ...(center && { textAlign: 'center' }),
  }

  return jsx(level, { css }, children)
}

Heading.defaultProps = {
  center: false,
  color: '#444',
  level: 'h1',
}

Heading.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  level: PropTypes.string,
}

export default Heading
