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
import Checkbox from 'material-ui/Checkbox'

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
    var email = this.refs.email.getValue()
    var description = this.refs.description.getValue()
    var categories = [
      this.refs.specificOne.getValue(),
      this.refs.specificTwo.getValue(),
      this.refs.specificThree.getValue(),
      this.refs.specificFour.getValue()
    ]
    var insurance = this.state.toogleState
    var hospital = {
      name: name,
      img: img,
      phone: phone,
      email: email,
      position: this.state.position,
      insurance: insurance,
      description: description,
      categories: categories
    }
    let _self = this
    if (hospital) {
      axios.post('/api/hospital-registration', {
        name: hospital.name,
        img: hospital.img,
        phone: hospital.phone,
        email: hospital.email,
        position: hospital.position,
        insurance: hospital.insurance,
        description: hospital.description,
        categories: hospital.categories
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
        marginTop: 30
      },
      formStyle: {
      },
      formDivisor: {
        padding: '0 0 30px 0'
      },
      formMessageDivisor: {
        paddingLeft: 15,
        paddingRight: 15
      },
      customWidth: {
        width: '95%'
      },
      img: {
        paddingTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
      }
    }

    return (
      <div>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form className='new-doctor' onSubmit={this.addHospital.bind(this)}>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <img width='200px' height='200px' style={styles.img} src={this.state.url} />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <Uploader handle={this.handleImageChange.bind(this)} />
                      </Col>
                      <Col sm={6} md={6} lg={6} style={{marginTop: 20}}>
                        <TextField
                          hintText='Hospital Name'
                          ref='hospitalName'
                          fullWidth
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6} style={{marginTop: 20}}>
                        <Checkbox
                          label='USA insurance?'
                          onClick={this.toggleChecked.bind(this)}
                        />
                      </Col>
                    </Row>
                    <Row style={{marginTop: 20}}>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality'
                          ref='specificOne'
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 2'
                          ref='specificTwo'
                          fullWidth
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 3'
                          ref='specificThree'
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 4'
                          ref='specificFour'
                          fullWidth
                        />
                      </Col>
                      <div style={styles.formMessageDivisor}>
                        <TextField
                          hintText='Describe yourself or experience(do not be shy)'
                          ref='description'
                          fullWidth
                          multiLine
                          rows={3}
                          rowsMax={6}
                        />
                      </div>
                    </Row>
                    <Row style={{marginTop: 20}}>
                      <Col sm={6} md={6} lg={6}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Phone Number'
                          ref='phone'
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='E-mail'
                          ref='email'
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6} style={{marginTop: 20}}>
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
