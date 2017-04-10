import React, {Component} from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import LabsListWrapper from './labsListWrapper/LabsListWrapper'

export default class LabsGeneralMap extends Component  {

  constructor () {
    super()
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

  handleCoordinates (latitude, longitude) {
    latitude = parseFloat(latitude)
    longitude = parseFloat(longitude)
    var coordinate = {
      latitude: latitude,
      longitude: longitude
    }
    return coordinate
  }

  render () {
    const positionState = [this.state.lat, this.state.lng]
    var L = require('leaflet')
    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')
    var LabMapIcon = L.icon({
      iconUrl: 'https://s29.postimg.org/6p57i16k7/lab.png',
      popupAnchor: [0, -18],
      iconSize: [25, 41]
    })
    return (
      <div className='mapcontainer'>
        <Map center={positionState} zoom={this.state.zoom}>
          <TileLayer
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          <div>
            <div>
              {this.props.labs.map((lab) => {
                {console.log('From props: ', lab);}
                return (
                  <Marker icon={LabMapIcon} key={lab._id} position={[lab.latitude, lab.longitude]}>
                    <Popup>
                      <span><a href={'http://maps.google.com/?q=' + lab.latitude + ',' + lab.longitude} > <br />{lab.name}</a></span>
                    </Popup>
                  </Marker>
                )
              })}
            </div>
          </div>
        </Map>
        <MuiThemeProvider>
          <div>
            <Drawer
              open={this.state.open}
              docked={false}
              onRequestChange={this.handleClose.bind(this)}>
                <LabsListWrapper labs={this.props.labs} />
              <MenuItem onClick={() => this.handleClose.bind(this)} >
                Close
              </MenuItem>
            </Drawer>
          </div>
        </MuiThemeProvider>
        <style jsx>
          {`
            .mapcontainer{
              margin: 0;
              padding: 0;
              width: 100%;
              height: 100%;
            }

            .sidenav {
              z-index: 9999 !important;
            }
          `}
        </style>
      </div>
    )
  }

}
