import React, { Component } from 'react'
import styles from './DetailMap.css'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

export default class DetailMap extends Component {

  /*
    componentDidMount () {
    // Only runs on Client, not on server render
      Map = require('react-leaflet').Map
      Marker = require('react-leaflet').Marker
      Popup = require('react-leaflet').Popup
      TileLayer = require('react-leaflet').TileLayer
      this.forceUpdate()
    }
  */

  render () {
    const position = [32.5194358, -117.0101997]
    const propPoistion = [Number(this.props.props.latitude), Number(this.props.props.longitude)]
    console.log(this.props.props)
    console.log(propPoistion)
    return (
      <div className={styles.map}>
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
    )
  }
}
