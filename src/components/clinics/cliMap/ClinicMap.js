import React from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import L from 'leaflet'
const position = [32.5194358, -117.0101997]
var clinicMapIcon = L.icon({
  iconUrl: 'https://s28.postimg.org/gb1zjlqz1/clinic.png',
  popupAnchor: [18, 0]
})
const ClinicMap = ({clinic}) => (
  <div>
    <Map center={position} zoom={5}>
      <TileLayer
        attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker icon={clinicMapIcon} position={[clinic.latitude, clinic.longitude]}>
        <Popup>
          <span>{clinic.name}</span>
        </Popup>
      </Marker>
    </Map>
  </div>
)

export default ClinicMap
