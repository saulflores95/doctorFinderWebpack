import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './DoctorMap.css'
const position = [51.505, -0.09]

const DoctorMap = () => (
  <div className={styles.map}>
    <Map center={position} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          <span>A pretty CSS3 popup</span>
        </Popup>
      </Marker>
    </Map>
  </div>
)

export default DoctorMap
