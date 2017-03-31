import React, { Component } from 'react'
import NoSSR from 'react-no-ssr'

export default class DetailMap extends Component {

  render () {
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')
    const position = [32.5194358, -117.0101997]
    const propPoistion = [Number(this.props.props.latitude), Number(this.props.props.longitude)]
    console.log(propPoistion)
    return (
      <div>
        <NoSSR onSSR={<div>Map Loading...</div>}>
          <div className='map'>
            <Map center={position} zoom={12}>
              <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              />
              <Marker position={propPoistion}>
                <Popup>
                  <span><a href={'http://maps.google.com/?q=' + this.props.props.latitude + ',' + this.props.props.longitude} > <br />{this.props.props.name}</a></span>
                </Popup>
              </Marker>
            </Map>
          </div>
        </NoSSR>
        <style jsx>
          {`
            .map {
              height:500px;
              width:100%;
              background-color:red;
            }
          `}
        </style>
      </div>
    )
  }
}
