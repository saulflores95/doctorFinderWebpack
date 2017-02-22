import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import styles from './DoctorMap.css'
const position = [32.5194358, -117.0101997]
import L from 'leaflet'

var DoctorMapIcon = L.icon({
  iconUrl: 'https://s28.postimg.org/ohtzb6h1p/Doctores.png',
  popupAnchor: [18, 0]
})

const DoctorMap = (doctor) => (
  <div className={styles.map}>
    <Map center={position} zoom={15}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker icon={DoctorMapIcon} position={[doctor.latitude, doctor.longitude]}>
        <Popup>
          <span><a href={'http://maps.google.com/?q=' + doctor.latitude + ',' + doctor.longitude} > <br />{doctor.name}</a></span>
        </Popup>
      </Marker>
    </Map>
  </div>
)

export default DoctorMap
