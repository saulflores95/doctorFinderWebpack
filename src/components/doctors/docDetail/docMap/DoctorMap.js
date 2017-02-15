import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './DoctorMap.css'
const position = [32.5194358, -117.0101997]
import L from 'leaflet'

var DoctorMapIcon = L.icon({
  iconUrl: 'https://s28.postimg.org/ohtzb6h1p/Doctores.png',
//iconSize: [80, 80],
// iconAnchor: [38, 38],
popupAnchor: [18, 0],
//  shadowUrl: '',
//  shadowSize: [68, 95],
//  shadowAnchor: [22, 94]
})

const DoctorMap = (doctor) => (
  <div className={styles.map}>
    <Map center={position} zoom={15}>
        <TileLayer
          attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker icon={DoctorMapIcon} position={position}>
          <Popup>
            <span>{doctor.name}</span>
          </Popup>
        </Marker>
      </Map>
  </div>
)

export default DoctorMap
