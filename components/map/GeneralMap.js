import React, {Component} from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

export default class GeneralMap extends Component {

  constructor () {
    super()
    this.state = {
      latitude: 32.50504,
      longitude: -116.99056,
      zoom: 5,
      open: false,
      showPharmacies: true,
      showHospitals: true,
      showDoctors: true,
      showClinics: true,
      showLabs: true
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

  componentDidMount() {
    this.map = this.refs.map.leafletElement
    setTimeout(() => {
      this.map.invalidateSize()
    }, 100)
  }

  toogle (value) {
    this.handleClose()
    if (value === 'doctors') {
      if (this.state.showDoctors === true) {
        this.setState({
          showDoctors: false,
          showPharmacies: false,
          showClinics: false,
          showHospitals: false,
          showLabs: false
        })
      } else {
        this.setState({
          showDoctors: true,
          showPharmacies: false,
          showClinics: false,
          showHospitals: false,
          showLabs: false
        })
      }
    } else if (value === 'pharmacies') {
      if (this.state.showPharmacies === true) {
        this.setState({
          showPharmacies: false
        })
      } else {
        this.setState({
          showPharmacies: true,
          showDoctors: false,
          showClinics: false,
          showHospitals: false,
          showLabs: false
        })
      }
    } else if (value === 'clinics') {
      if (this.state.showClinics === true) {
        this.setState({
          showClinics: false
        })
      } else {
        this.setState({
          showClinics: true,
          showPharmacies: false,
          showDoctors: false,
          showHospitals: false,
          showLabs: false
        })
      }
    } else if (value === 'labs') {
      if (this.state.showLabs === true) {
        this.setState({
          showLabs: false
        })
      } else {
        this.setState({
          showLabs: true,
          showPharmacies: false,
          showDoctors: false,
          showClinics: false,
          showHospitals: false
        })
      }
    } else if (value === 'hospitals') {
      if (this.state.showHospitals === true) {
        this.setState({
          showHospitals: false
        })
      } else {
        this.setState({
          showHospitals: true,
          showPharmacies: false,
          showDoctors: false,
          showClinics: false,
          showLabs: false
        })
      }
    } else if (value === 'all') {
      this.setState({
        showHospitals: true,
        showPharmacies: true,
        showDoctors: true,
        showClinics: true,
        showLabs: true
      })
    } else {
      console.log('Not Working: ', value)
    }
  }

  render () {
    const userPosition = [this.state.latitude, this.state.longitude]

    var L = require('leaflet')

    var { Map, Marker, Popup, TileLayer } = require('react-leaflet')

    var handlePharmacies = () => {
      if (this.state.showPharmacies === true) {
        var PharmacieMapIcon = L.icon({
          iconUrl: 'https://s28.postimg.org/t501cy4el/Farmacias.png',
          popupAnchor: [0, -18],
          iconSize: [30, 41]
        })
        return (
          <div>
            {this.props.pharmacies.map((pharmacie) => {
              var cordinates = this.handleCoordinates(pharmacie.latitude, pharmacie.longitude)
              return (
                <Marker icon={PharmacieMapIcon} position={[cordinates.latitude, cordinates.longitude]}>
                  <Popup>
                    <span><a href={'http://maps.google.com/?q=' + pharmacie.latitude + ',' + pharmacie.longitude} > <br />{pharmacie.name}</a></span>
                  </Popup>
                </Marker>
              )
            })}
          </div>
        )
      }
    }

    var handleHospitals = () => {
      var hospitalMapIcon = L.icon({
        iconUrl: 'https://s28.postimg.org/d819g8c0d/Hospitals.png',
        popupAnchor: [0, -18],
        iconSize: [30, 41]

      })
      if (this.state.showHospitals === true) {
        return (
          <div>
            {this.props.hospitals.map((hospital) => {
              var cordinates = this.handleCoordinates(hospital.latitude, hospital.longitude)
              return (
                <Marker key={hospital._id} icon={hospitalMapIcon} position={[cordinates.latitude, cordinates.longitude]}>
                  <Popup>
                    <span><a href={'http://maps.google.com/?q=' + hospital.latitude + ',' + hospital.longitude}><br />{hospital.name}</a></span>
                  </Popup>
                </Marker>
              )
            })}
          </div>
        )
      }
    }

    var handleDoctors = () => {
      var DoctorMapIcon = L.icon({
        iconUrl: 'https://s28.postimg.org/ohtzb6h1p/Doctores.png',
        popupAnchor: [0, -18],
        iconSize: [30, 41]
      })
      if (this.state.showDoctors === true) {
        return (
          <div>
            {this.props.doctors.map((doctor) => {
              var cordinates = this.handleCoordinates(doctor.latitude, doctor.longitude)
              return (
                <Marker key={doctor._id} icon={DoctorMapIcon} position={[cordinates.latitude, cordinates.longitude]}>
                  <Popup>
                    <span><br /><a href={'http://maps.google.com/?q=' + doctor.latitude + ',' + doctor.longitude}>{doctor.name}</a></span>
                  </Popup>
                </Marker>
              )
            })}
          </div>
        )
      }
    }

    var handleClinics = () => {
      var clinicMapIcon = L.icon({
        iconUrl: 'https://s28.postimg.org/gb1zjlqz1/clinic.png',
        popupAnchor: [0, -18],
        iconSize: [30, 41]
      })
      if (this.state.showClinics === true) {
        return (
          <div>
            {this.props.clinics.map((clinic) => {
              var cordinates = this.handleCoordinates(clinic.latitude, clinic.longitude)
              return (
                <Marker key={clinic._id} icon={clinicMapIcon} position={[cordinates.latitude, cordinates.longitude]}>
                  <Popup>
                    <span><a href={'http://maps.google.com/?q=' + clinic.latitude + ',' + clinic.longitude}> <br />{clinic.name}</a></span>
                  </Popup>
                </Marker>
              )
            })}
          </div>
        )
      }
    }

    var handleLabs = () => {
      var labMapIcon = L.icon({
        iconUrl: 'https://s29.postimg.org/6p57i16k7/lab.png',
        popupAnchor: [0, -18],
        iconSize: [30, 41]
      })
      if (this.state.showClinics === true) {
        return (
          <div>
            {this.props.labs.map((lab) => {
              var cordinates = this.handleCoordinates(lab.latitude, lab.longitude)
              return (
                <Marker key={lab._id} icon={labMapIcon} position={[cordinates.latitude, cordinates.longitude]}>
                  <Popup>
                    <span><a href={'https://maps.google.com/?q=' + lab.latitude + ',' + lab.longitude}><br />{lab.name}</a></span>
                  </Popup>
                </Marker>
              )
            })}
          </div>
        )
      }
    }

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
        <Map ref='map' center={mapCenter} zoom={this.state.zoom} >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <div>
            {handlePharmacies()}
          </div>
          <div>
            {handleClinics()}
          </div>
          <div>
            {handleHospitals()}
          </div>
          <div>
            {handleLabs()}
          </div>
          <div>
            {handleDoctors()}
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
              <MenuItem onClick={() => this.toogle('all')} >
                <h3>Show All </h3>
              </MenuItem>
              <MenuItem onClick={() => this.toogle('doctors') && this.handleClose()} >
                <h3>Doctors </h3>
              </MenuItem>
              <MenuItem onClick={() => this.toogle('pharmacies')} >
                <h3>Pharmacies </h3>
              </MenuItem>
              <MenuItem onClick={() => this.toogle('clinics')} >
                <h3>Clinics </h3>
              </MenuItem>
              <MenuItem onClick={() => this.toogle('labs')} >
                <h3>Laboratories </h3>
              </MenuItem>
              <MenuItem onClick={() => this.toogle('hospitals')} >
                <h3>Hospitals </h3>
              </MenuItem>
              <MenuItem onClick={() => this.handleClose()} >
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
          `}
        </style>
      </div>
    )
  }
}
