import React, {Component} from 'react'
import {Map, Marker, Popup, TileLayer} from 'react-leaflet'
import Control from 'react-leaflet-control'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import PharmacieListWrapper from './phaListWrapper/PharmacieListWrapper'
import L from 'leaflet'

export default class PharmacieGeneralMap extends Component {

  constructor () {
    super()
    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      lat: 32.5194358,
      lng: -117.0101997,
      zoom: 15,
      open: false
    }
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    const positionState = [this.state.lat, this.state.lng]
    const styles = {
      leafletContainer: {
        width: '100%',
        height: 600
      }
    }
    var PharmacieMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
      popupAnchor: [18, 0]
    })

    return (
      <div>
        <div className={styles.mapcontainer}>
          <Map center={positionState} zoom={this.state.zoom}>
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            />
            <Control position='topleft'>
              <MuiThemeProvider>
                <FloatingActionButton mini onClick={this.handleToggle}>
                  <ContentAdd />
                </FloatingActionButton>
              </MuiThemeProvider>
            </Control>
            <div>
              <div>
                {this.props.pharmacies.map((pharmacie) => {
                  return (
                    <Marker icon={PharmacieMapIcon} position={[pharmacie.latitude, pharmacie.longitude]}>
                      <Popup>
                        <span>{pharmacie.name}</span>
                      </Popup>
                    </Marker>
                  )
                })}
              </div>
            </div>
          </Map>
          <MuiThemeProvider>
            <div style={styles.sideNav}>
              <Drawer
                open={this.state.open}
                docked={false}
                className='sidenav'
                onRequestChange={(open) => this.setState({open})}>
                <PharmacieListWrapper pharmacies={this.props.pharmacies} />
                <MenuItem onClick={this.handleClose}>
                  Close
                </MenuItem>
              </Drawer>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    )
  }

}
