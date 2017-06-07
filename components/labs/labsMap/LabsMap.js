import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import LabsListWrapper from '../components/labs/labsMap/labsListWrapper/LabsListWrapper'

export default class LabsMap extends Component {
  constructor () {
    super()
    this.state = {
      latitude: 32.50504,
      longitude: -116.99056,
      zoom: 5,
      open: false
    }
  }

  handleCoordinates (latitude, longitude) {
    latitude = parseFloat(latitude)
    longitude = parseFloat(longitude)
    var coordinate = {
      latitude: latitude,
      longitude: longitude
    }
    return coordinate
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  componentDidMount () {
    this.map = this.refs.map.leafletElement
    setTimeout(() => {
      this.map.invalidateSize()
    }, 100)
  }

  render () {
    const userPosition = [this.state.latitude, this.state.longitude]
    var L = require('leaflet')
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')

    var mapCenter = [this.state.latitude, this.state.longitude]

    return (
      <div className='map'>
        <Map ref='map' center={mapCenter} zoom={this.state.zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <div>
            {this.props.labs.map((lab) => {
              return (
                <Marker position={[lab.latitude, lab.longitude]}>
                  <Popup>
                    <span><a href={'http://maps.google.com/?q= + lab.latitude + ',' + pharmacie.longitude'} > <br />{pharmacie.name}</a></span>
                  </Popup>
                </Marker>
              )
            })}
          </div>
          <div>
            <Marker position={userPosition}>
              <Popup>
                <span> <br />This is you</span>
              </Popup>
            </Marker>
          </div>
        </Map>
        <MuiThemeProvider>
          <div>
            <Drawer
              open={this.state.open}
              docked={false}
              className='sidenav'
              onRequestChange={(open) => this.setState({open})}>
              <div className='sidenav'>
                <LabsListWrapper labs={this.props.labs} />
              </div>
              <MenuItem onClick={() => this.handleClose()} >
                <h3>Close </h3>
              </MenuItem>
            </Drawer>
          </div>
        </MuiThemeProvider>
        <style jsx>
          {`
            .map {
              height: 300px;
            }

            .sidenav {
              margin-top: 67px;
            }
            button {
              padding-top: 100px;
              z-index:10000;
            }
          `}
        </style>
      </div>
    )
  }

}
