import React, { Component } from 'react'

export default class DetailMap extends Component {

  componentDidMount() {
    this.map = this.refs.map.leafletElement
    setTimeout(() => {
      this.map.invalidateSize()
    }, 100)
}

  handleHref() {
    window.location.href= 'https://maps.google.com/?q=' + this.props.props.position[0].lat + ',' + this.props.props.position[0].lng
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
              <Marker position={propPoistion} onClick={this.handleHref.bind(this)} />
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
