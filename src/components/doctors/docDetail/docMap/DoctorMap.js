import React from 'react'
import L from 'leaflet'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './DoctorMap'
const DoctorMapIcon = L.icon({
  iconUrl: 'https://s28.postimg.org/ohtzb6h1p/Doctores.png',
  popupAnchor: [18, 0]
})

const DoctorMap = (doctor) => {
  <div className={styles.leafletContainer}>
    <Map center={[32.5194358, -117.0101997]} zoom={5}>
      <TileLayer
        attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
      <Marker icon={DoctorMapIcon} position={[doctor.latitude, doctor.longitude]}>
        <Popup>
          <span>{doctor.name}</span>
        </Popup>
      </Marker>
    </Map>
  </div>
}

export default DoctorMap
