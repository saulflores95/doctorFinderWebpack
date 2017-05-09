import React, { Component } from 'react'

export default class DetailMap extends Component {

  componentDidMount() {
    this.map = this.refs.map.leafletElement
    setTimeout(() => {
      this.map.invalidateSize()
    }, 100)
}

  render () {
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')
    const position = [32.5194358, -117.0101997]
    const propPoistion = [Number(this.props.props.position[0].lat), Number(this.props.props.position[0].lng)]
    console.log('propPoistion: ', propPoistion);
    return (
      <div>
          <div className='map'>
            <Map ref='map' center={propPoistion} zoom={12}>
              <TileLayer
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
              <Marker position={propPoistion}>
                <Popup>
                  <span><a href={'https://maps.google.com/?q=' + this.props.props.latitude + ',' + this.props.props.longitude} > <br />{this.props.props.name}</a></span>
                </Popup>
              </Marker>
            </Map>
          </div>
        <style jsx>
          {`
            .map {
              height:250px;
              width:100%;
              background-color:red;
            }
          `}
        </style>
      </div>
    )
  }
}
