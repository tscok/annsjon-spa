import React, { useEffect, useRef, useState } from 'react'

const HOGASEN = new google.maps.LatLng(63.307583, 12.37526)

const TOOLTIP = new google.maps.InfoWindow()

const WAYPOINTS = [
  {
    text: 'Parkering vid ställverk',
    latlng: new google.maps.LatLng(63.2973412424, 12.3513946496),
    label: 'A',
  },
  {
    text: 'Raststugan "Grand Hotel"',
    latlng: new google.maps.LatLng(63.3126225416, 12.3581390642),
    label: 'B',
  },
  {
    text: 'Obsplats Högåsen',
    latlng: new google.maps.LatLng(63.312636, 12.365895),
    label: 'C',
  },
  {
    text: 'HOGAS',
    latlng: new google.maps.LatLng(63.3122700825, 12.366465982),
    label: 'D',
  },
  {
    text: 'Telemast',
    latlng: new google.maps.LatLng(63.310186, 12.35427),
    label: 'T',
  },
]

const CONFIG = {
  zoom: 12,
  center: HOGASEN,
  mapTypeId: google.maps.MapTypeId.TERRAIN,
  streetViewControl: false,
}

const HogasenMap = () => {
  const [mapData, setMapData] = useState(undefined)
  const mapRef = useRef()

  const setMarkers = (data) => {
    WAYPOINTS.forEach((waypoint) => {
      const marker = new google.maps.Marker({
        position: waypoint.latlng,
        label: waypoint.label,
        map: data,
      })

      marker.addListener('click', () => {
        TOOLTIP.setContent(waypoint.text)
        TOOLTIP.open(data, marker)
      })
    })
  }

  useEffect(() => {
    if (!mapData && mapRef.current) {
      const data = new window.google.maps.Map(mapRef.current, CONFIG)
      setMapData(data)
      setMarkers(data)
    }
  }, [])

  return <div css={{ height: '300px' }} ref={mapRef} />
}

export default HogasenMap
