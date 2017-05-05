import React, { Component } from 'react'

export default class DetailMap extends Component {

  componentDidMount() {
    this.map = this.refs.map.leafletElement
    setTimeout(() => {
      this.map.invalidateSize()
    }, 100)
}

  linkto(){
    var linkTo = 'http://maps.google.com/?q=' + this.props.props.latitude + ',' + this.props.props.longitude
    window.location.href = linkTo
  }

  render () {
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')
    console.log(this.props.props);
    const position = [32.5194358, -117.0101997]
    const propPoistion = [Number(this.props.props.latitude), Number(this.props.props.longitude)]
    console.log(propPoistion)
    return (
      <div>
          <div className='map'>
            <Map ref='map' center={position} zoom={12}>
              <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
                <Marker position={propPoistion} onClick={this.linkto.bind(this)} />
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
