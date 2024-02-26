import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import LogoBlack from '../../assets/images/svg/faf_logo.svg?react'
import LogoWhite from '../../assets/images/svg/faf_logo_white.svg?react'

import { media } from './GlobalStyles'

const link = css`
  align-items: center;
  display: flex;
  height: 80px;
  width: 60px;
`

const linkFooter = css`
  ${media.medium} {
    opacity: 0.3;
    width: 120px;    
  }
`

const image = css`
  width: 100%;
`

const Logotype = ({ white }) => {
  return (
    <Link to="/" css={[link, white ? linkFooter : undefined]}>
      {white ? <LogoWhite css={image} /> : <LogoBlack css={image} />}
    </Link>
  )
}

Logotype.defaultProps = {
  white: false,
}

Logotype.propTypes = {
  white: PropTypes.bool,
}

export default Logotype
