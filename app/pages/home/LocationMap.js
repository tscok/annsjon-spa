import React, { useEffect, useRef, useState } from 'react'
import { css } from '@emotion/core'

import { media } from '../../site/GlobalStyles'

const styles = css`
  height: 150px;
  z-index: 0;

  .gmnoprint,
  .gmnoscreen,
  .gm-style-cc,
  .gm-style a {
    display: none !important;
  }

  ${media.small} {
    border-radius: 50%;
    height: 300px;
  }
`

const HANDOL = new window.google.maps.LatLng(63.25847135123485, 12.447509765625)

const CONFIG = {
  center: HANDOL,
  disableDefaultUI: true,
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  scaleControl: false,
  streetViewControl: false,
  zoom: 4,
  zoomControl: false,
}

const LocationMap = () => {
  const [map, setMap] = useState(null)
  const mapRef = useRef()

  const setMarker = (data) => {
    new window.google.maps.Marker({
      position: HANDOL,
      map: data,
    })
  }

  useEffect(() => {
    if (!map && mapRef.current) {
      const data = new window.google.maps.Map(mapRef.current, CONFIG)
      setMap(data)
      setMarker(data)
    }
  }, [])

  return <div css={styles} ref={mapRef} />
}

export default LocationMap
