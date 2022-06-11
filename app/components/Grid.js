import PropTypes from 'prop-types'
import React from 'react'

import { media } from '../site/GlobalStyles'

const Grid = ({ center, children, columns, gap, rows }) => {
  const css = {
    display: 'grid',
    gap,
    ...(center && {
      alignItems: 'center',
      justifyItems: 'center',
    }),
    [media.small]: {
      ...(columns && { gridTemplateColumns: columns }),
      ...(rows && { gridTemplateRows: rows }),
    },
  }
  return <div css={css}>{children}</div>
}

Grid.defaultProps = {
  center: false,
  children: null,
  columns: undefined,
  gap: '40px',
  rows: undefined,
}

Grid.propTypes = {
  center: PropTypes.bool,
  children: PropTypes.node,
  columns: PropTypes.string,
  gap: PropTypes.string,
  rows: PropTypes.string,
}

export default Grid
