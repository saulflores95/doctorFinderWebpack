import React, {Component} from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import PharmacieListWrapper from './phaListWrapper/PharmacieListWrapper'
if (process.env.BROWSER) {
  var styles = require('./PharmacieGeneralMap.css')
  var L = require('leaflet')
}
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
    var {Map, Marker, Popup, TileLayer} = require('react-leaflet')
    var Control = require('react-leaflet-control')

    const positionState = [this.state.lat, this.state.lng]
    var PharmacieMapIcon = L.icon({
      iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
      popupAnchor: [0, -18],
      iconSize: [25, 41]
    })

    return (
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
            {this.props.pharmacies.map((pharmacie) => {
              return (
                <Marker key={pharmacie._id} icon={PharmacieMapIcon} position={[Number(pharmacie.latitude), Number(pharmacie.longitude)]}>
                  <Popup>
                    <span><a href={'http://maps.google.com/?q=' + pharmacie.latitude + ',' + pharmacie.longitude} > <br />{pharmacie.name}</a></span>
                  </Popup>
                </Marker>
              )
            })}
          </div>
        </Map>
        <MuiThemeProvider>
          <Drawer
            open={this.state.open}
            docked={false}
            className='sidenav'
            onRequestChange={(open) => this.setState({open})}>
            <div className={styles.sidenav}>
              <PharmacieListWrapper pharmacies={this.props.pharmacies} />
            </div>
            <MenuItem onClick={this.handleClose}>
              Close
            </MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    )
  }

}
