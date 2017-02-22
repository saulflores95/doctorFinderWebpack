import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import styles from './PharmacieMap.css'

const position = [32.5194358, -117.0101997]

var PharmacieMapIcon = L.icon({
  iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
  popupAnchor: [18, 0]
})

const PharmacieMap = ({pharmacie}) => (
  <div className={styles.map}>
    <Map center={position} zoom={5}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <div>
        <Marker icon={PharmacieMapIcon} position={[pharmacie.latitude, pharmacie.longitude]}>
          <Popup>
            <span><a href={'http://maps.google.com/?q=' + pharmacie.latitude + ',' + pharmacie.longitude} > <br />{pharmacie.name}</a></span>
          </Popup>
        </Marker>
      </div>
    </Map>
  </div>
)

export default PharmacieMap
