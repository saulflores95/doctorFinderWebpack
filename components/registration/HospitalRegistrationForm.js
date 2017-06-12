import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import AlertContainer from 'react-alert'
import NoSSR from 'react-no-ssr'
import axios from 'axios'
import Uploader from '../uploader/Uploader'
import RegistrationMap from './RegistrationMap'

export default class HospitalRegistrationForm extends Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      count: 0,
      position: [32, 100],
      url: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbPvqnfj0taeHk9BLFCYpySg2-eVk2i7kx4PE046Waix2-zM-NAILl-m8'
    }
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    }
  }

  toggleChecked (Checkbox) {
    console.log('this was pressed')
    if (this.state.toogleState === false) {
      this.state.toogleState = true
    } else {
      this.state.toogleState = false
    }
    console.log(this.state.toogleState)
  }

  mapClick (event) {
    console.log('user right-clicked on map coordinates: ' + event.latlng.toString())
    this.setState({
      position: event.latlng
    })
    console.log(this.state.position)

    // L.marker(event.latlng)
  }

  handleImageChange (url) {
    if (url) {
      this.setState({
        url: url
      })
      console.log('State From Parent Change: ', this.state.url)
    } else if (!url) {
      console.log('url not found')
    }
  }

  addHospital (event) {
    event.preventDefault()
    var name = this.refs.hospitalName.getValue()
    var img = this.state.url
    var phone = this.refs.phone.getValue()
    var hospital = {
      name: name,
      img: img,
      phone: phone,
      position: this.state.position

    }
    console.log(hospital)
    let _self = this

    if (hospital) {
      axios.post('/api/hospital-registration', {
        name: hospital.name,
        img: hospital.img,
        phone: hospital.phone,
        position: hospital.position
      })
      .then(function (response) {
        console.log(response)
        _self.msg.show('hospital Added', {
          time: 2000,
          type: 'success',
          icon: <img width='50px' height='50px' src='https://cdn2.iconfinder.com/data/icons/perfect-flat-icons-2/512/Ok_check_yes_tick_accept_success_green_correct.png' />
        })
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }

  render () {
    const styles = {
      paper: {
        width: '100%',
        padding: '0 0 0 0',
        marginTop: '50px'
      },
      formStyle: {
      },
      formDivisor: {
        padding: '0 0 30px 0'
      },
      formMessageDivisor: {
        padding: '0 0 10px 0'
      },
      customWidth: {
        width: '95%'
      },
      container: {
        paddingTop: 50
      }
    }

    return (
      <div style={styles.container}>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form className='new-doctor' onSubmit={this.addHospital.bind(this)}>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Hospital Name'
                          ref='hospitalName'
                          fullWidth
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <img width='200px' height='200px' style={styles.img} src={this.state.url} />
                      </Col>

                      <Col sm={12} md={6} lg={6}>
                        <Uploader handle={this.handleImageChange.bind(this)} />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                    </Row>
                  </div>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Phone Number'
                          ref='phone'
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={2}>
                        <RaisedButton
                          label='Register'
                          type='submit'
                          className='button-submit'
                          primary
                        />
                      </Col>
                    </Row>
                  </div>
                </form>
              </Container>
            </Paper>
            <div>
              <AlertContainer ref={(a) => { this.msg = a }} {...this.alertOptions} />
            </div>
          </Container>
        </MuiThemeProvider>
      </div>
    )
  }
}
