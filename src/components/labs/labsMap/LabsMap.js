import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'

const position = [32.5194358, -117.0101997]

var LabMapIcon = L.icon({
  iconUrl: 'https://s29.postimg.org/6p57i16k7/lab.png',
  popupAnchor: [18, 0]
})

const LabsMap = ({lab}) => (
  <div className='map-pharmacie'>
    <Map center={position} zoom={5}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <div>
        <Marker icon={LabMapIcon} position={[lab.latitude, lab.longitude]}>
          <Popup>
            <span>{lab.name}</span>
          </Popup>
        </Marker>
      </div>
    </Map>
  </div>
)

export default LabsMap
