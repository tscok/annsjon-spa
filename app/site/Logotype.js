import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'react-router-dom'

import logoBlack from '../../assets/images/svg/faf_logo.svg'
import logoWhite from '../../assets/images/svg/faf_logo_white.svg'
import useText from '../utils/useText'

import { media } from './GlobalStyles'

const base = css`
  background-position: 0 50%;
  background-repeat: no-repeat;
  background-size: 60px;
  display: block;
  height: 80px;
  overflow: hidden;
  text-indent: -1000px;
  width: 60px;
`

const header = css`
  ${base};
  background-image: url('${logoBlack}');
`

const footer = css`
  ${base};
  background-image: url('${logoWhite}');

  ${media.medium} {
    background-size: 120px;
    opacity: 0.3;
    width: 120px;    
  }
`

const Logotype = ({ white }) => {
  const getText = useText()

  return (
    <Link to="/" css={[base, white ? footer : header]}>
      {getText('site_title')}
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
