import React, {Component} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import ReactDOM from 'react-dom'
import Control from 'react-leaflet-control'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import PharmacieSingleList from '../pharmacies/PharmacieSingleList.jsx'

const PharmacieGeneralMap = () => (
  <div className="generalMap-container">
    <Map center={positionState} zoom={this.state.zoom}>
      <TileLayer
        attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
      <Control position="topleft">
        <MuiThemeProvider>
        <FloatingActionButton mini={true} onClick={this.handleToggle}>
          <ContentAdd />
        </FloatingActionButton>
        </MuiThemeProvider>
      </Control>
        <div>
        {this.pharmacies().map((pharmacie)=>{
          return(
            <Marker icon={PharmacieMapIcon} position={[pharmacie.latitude, pharmacie.longitude]}>
              <Popup>
                <span>Location. <br/>{pharmacie.name}</span>
              </Popup>
            </Marker>
          )
        })}
        </div>
    </Map>
    <MuiThemeProvider>
      <div style={styles.sideNav}>
        <Drawer
          open={this.state.open}
          docked={false}
          className="sidenav"
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleClose}>
            <PharmacieSingleList name={this.props.name} />
          </MenuItem>
        </Drawer>
      </div>
    </MuiThemeProvider>
  </div>
)

export default PharmacieGeneralMap
