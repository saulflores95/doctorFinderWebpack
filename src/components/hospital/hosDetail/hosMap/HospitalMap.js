import React from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
const position = [32.5194358, -117.0101997]
import L from 'leaflet'

const hospitalMapIcon = L.icon({
  iconUrl: 'https://s28.postimg.org/d819g8c0d/Hospitals.png',
  popupAnchor: [18, 0]
})

const HospitalMap = ({hospital}) => (
  <div className='map-pharmacie'>
    <Map center={position} zoom={5}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Marker icon={hospitalMapIcon} position={position}>
        <Popup>
          <span><a href={'http://maps.google.com/?q=' + hospital.latitude + ',' + hospital.longitude} > <br />{hospital.name}</a></span>
        </Popup>
      </Marker>
    </Map>
  </div>
)

export default HospitalMap
