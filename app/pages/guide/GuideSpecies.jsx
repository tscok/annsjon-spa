import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import Aside from '../../components/Aside'
import AsideBlock from '../../components/AsideBlock'

const capitalize = (str) => `${str[0].toUpperCase()}${str.slice(1)}`

const GuideSpecies = ({ items, title }) => (
  <Aside right>
    <AsideBlock title={title}>
      <ol>
        {[...new Set(items)]
          .map(capitalize)
          .sort()
          .map((value, index) => (
            <li key={value}>{value}</li>
          ))}
      </ol>
    </AsideBlock>
  </Aside>
)

GuideSpecies.defaultProps = {
  items: [],
}

GuideSpecies.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
}

export default GuideSpecies
