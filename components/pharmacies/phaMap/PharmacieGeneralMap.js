import React, {Component} from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import PharmacieListWrapper from './phaListWrapper/PharmacieListWrapper'

export default class PharmacieGeneralMap extends Component {

  constructor () {
    super()
    this.state = {
      latitude: 32.50504,
      longitude: -116.99056,
      zoom: 5,
      open: false,
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

  render () {
    const userPosition = [this.state.latitude, this.state.longitude]
    var L = require('leaflet')
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')
    var PharmacieMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
      popupAnchor: [0, -18],
      iconSize: [25, 41]
    })

    var mapCenter = [this.state.latitude, this.state.longitude]
    var styles = {
      button: {
        zIndex: 999,
        position: 'absolute',
        top: 85,
        left: 7
      }
    }
    return (
      <div className='map'>
        <MuiThemeProvider>
          <FloatingActionButton style={styles.button} mini={true} onClick={this.handleToggle.bind(this)}>
            <ContentAdd>
            </ContentAdd>
          </FloatingActionButton>
        </MuiThemeProvider>
        <Map center={mapCenter} zoom={this.state.zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'/>
          <div>
            {this.props.pharmacies.map((pharmacie) => {
              return (
                <Marker icon={PharmacieMapIcon} position={[pharmacie.latitude, pharmacie.longitude]}>
                  <Popup>
                    <span><a href={'http://maps.google.com/?q=' + pharmacie.latitude + ',' + pharmacie.longitude} > <br />{pharmacie.name}</a></span>
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
                <PharmacieListWrapper pharmacies={this.props.pharmacies} />
              </div>
              <MenuItem onClick={this.handleClose.bind(this)} >
                <h3>Close </h3>
              </MenuItem>
            </Drawer>
          </div>
        </MuiThemeProvider>
        <style jsx>
          {`
            .map {
              height: 100%;
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
