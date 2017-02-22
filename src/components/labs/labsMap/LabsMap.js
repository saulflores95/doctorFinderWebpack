import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import styles from './LabsMap.css'

const position = [32.5194358, -117.0101997]

var LabMapIcon = L.icon({
  iconUrl: 'https://s29.postimg.org/6p57i16k7/lab.png',
  popupAnchor: [18, 0]
})

const LabsMap = ({lab}) => (
  <div className={styles.map}>
    <Map center={position} zoom={5}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <div>
        <Marker icon={LabMapIcon} position={[lab.latitude, lab.longitude]}>
          <Popup>
            <span><a href={'http://maps.google.com/?q=' + lab.latitude + ',' + lab.longitude} > <br />{lab.name}</a></span>
          </Popup>
        </Marker>
      </div>
    </Map>
  </div>
)

export default LabsMap
