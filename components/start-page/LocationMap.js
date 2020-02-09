import React, { useEffect, useRef, useState } from 'react'

const HANDOL = new window.google.maps.LatLng(63.25847135123485, 12.447509765625)

const CONFIG = {
  center: HANDOL,
  disableDefaultUI: true,
  mapTypeId: window.google.maps.MapTypeId.TERRAIN,
  scaleControl: false,
  streetViewControl: false,
  zoom: 4,
  zoomControl: false,
}

const LocationMap = () => {
  const [map, setMap] = useState(null)
  const mapCanvas = useRef()

  const setMarker = data => {
    new window.google.maps.Marker({
      position: HANDOL,
      map: data,
    })
  }

  useEffect(() => {
    if (!map && mapCanvas.current) {
      const data = new window.google.maps.Map(mapCanvas.current, CONFIG)
      setMap(data)
      setMarker(data)
    }
  }, [])

  return <div id="mapCanvas" ref={mapCanvas} />
}

export default LocationMap
