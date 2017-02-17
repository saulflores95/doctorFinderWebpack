import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

const position = [32.5194358, -117.0101997]

var PharmacieMapIcon = L.icon({
  iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
  popupAnchor: [18, 0]
})

const PharmacieMap = ({pharmacie}) => (
  <div className='map-pharmacie'>
    <Map center={position} zoom={5}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <div>
        <Marker icon={PharmacieMapIcon} position={[pharmacie.latitude, pharmacie.longitude]}>
          <Popup>
            <span>{pharmacie.name}</span>
          </Popup>
        </Marker>
      </div>
    </Map>
  </div>
)

export default PharmacieMap
