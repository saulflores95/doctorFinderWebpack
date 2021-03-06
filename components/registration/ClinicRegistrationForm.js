import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import Checkbox from 'material-ui/Checkbox'
import MenuItem from 'material-ui/MenuItem'
import Uploader from '../uploader/Uploader'
import axios from 'axios'
import NoSSR from 'react-no-ssr'
import RegistrationMap from './RegistrationMap'
import AlertContainer from 'react-alert'
import injectTapEventPlugin from 'react-tap-event-plugin'

export default class ClinicRegistrationForm extends Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      value: 'Dermatology',
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

  componentWillMount () {
    try { injectTapEventPlugin() } catch (e) { }
  }

  mapClick (event) {
    console.log('user right-clicked on map coordinates: ' + event.latlng.toString())
    this.setState({
      position: event.latlng
    })
    console.log(this.state.position)

    // L.marker(event.latlng)
  }

  handleChange (event, index, value) {
    this.setState({value: value})
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

  toggleChecked (Checkbox) {
    if (this.state.toogleState === false) {
      this.state.toogleState = true
    } else {
      this.state.toogleState = false
    }
  }

  addClinic () {
    var name = this.refs.clinicName.getValue()
    var img = this.state.url
    var description = this.refs.description.getValue()
    var specialty = this.state.value
    var phone = this.refs.phone.getValue()
    var facebook = this.refs.facebook.getValue()
    var categories = [
      this.refs.specificOne.getValue(),
      this.refs.specificTwo.getValue(),
      this.refs.specificThree.getValue(),
      this.refs.specificFour.getValue()
    ]
    var email = this.refs.email.getValue()
    var insurance = this.state.toogleState
    var clinic = {
      name: name,
      img: img,
      categories: categories,
      description: description,
      insurance: insurance,
      email: email,
      phone: phone,
      position: this.state.position,
      specialty: specialty,
      facebook: facebook
    }
    let _self = this
    if (clinic) {
      axios.post('/api/clinic-registration', {
        name: clinic.name,
        img: clinic.img,
        description: clinic.description,
        insurance: clinic.insurance,
        categories: clinic.categories,
        email: clinic.email,
        phone: clinic.phone,
        position: clinic.position,
        specialty: clinic.specialty,
        facebook: clinic.facebook
      })
      .then(function (response) {
        console.log(response)
        _self.msg.show('Clinic Added', {
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
      <div style={styles.container}>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form className='new-doctor'>
                  <div>
                    <Row>
                      <Col sm={6} md={6} lg={6}>
                        <img width='250' height='200' style={styles.img} src={this.state.url} />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <div style={{marginTop: 30}}>
                          <Row>
                            <Col sm={12} md={6} lg={4} style={{marginRight: 40, paddingTop: 4}}>
                              <Uploader handle={this.handleImageChange.bind(this)} />
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                              <SelectField
                                floatingLabelText='Specialty'
                                value={this.state.value}
                                onChange={this.handleChange.bind(this)}
                              >
                                <MenuItem value={'Dermatology'} primaryText='Dermatology' />
                                <MenuItem value={'Dental'} primaryText='Dental ' />
                                <MenuItem value={'Hair Transplant'} primaryText='Hair Transplant  ' />
                                <MenuItem value={'Foot'} primaryText='Foot ' />
                                <MenuItem value={'Oncology'} primaryText='Oncology ' />
                                <MenuItem value={'Fertility Control '} primaryText='Fertility Control  ' />
                                <MenuItem value={'Eye'} primaryText='Eye ' />
                                <MenuItem value={'SPA '} primaryText='SPA  ' />
                                <MenuItem value={'Pediatric'} primaryText='Pediatric ' />
                                <MenuItem value={'Plastic Surgery'} primaryText='Plastic Surgery  ' />
                              </SelectField>
                            </Col>
                            <Col sm={12} md={12} lg={12} style={{marginTop: 15}}>
                              <TextField
                                hintText='Clinic Name'
                                ref='clinicName'
                                fullWidth
                              />
                            </Col>
                            <Col sm={12} md={12} lg={12} style={{marginTop: 20}}>
                              <Checkbox
                                label='USA insurance?'
                                onClick={this.toggleChecked.bind(this)}
                              />
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                    <div style={{marginTop: 20}}>
                      <Row>
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
                      <Row style={{marginTop: 10}}>
                        <Col sm={6} md={6} lg={6} style={{marginBottom: 30}}>
                          <NoSSR onSSR={<div>Map Loading...</div>} >
                            <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                          </NoSSR>
                        </Col>
                        <Col sm={6} md={6} lg={6}>
                          <TextField
                            hintText='E-mail'
                            ref='email'
                            fullWidth={false}
                          />
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
                            hintText='Facebook'
                            ref='facebook'
                            fullWidth={false}
                          />
                        </Col>
                        <Col sm={6} md={6} lg={6}>
                          <RaisedButton
                            label='Register'
                            onClick={this.addClinic.bind(this)}
                            className='button-submit'
                            primary
                            style={{marginTop: 20, marginBottom: 20}}
                          />
                        </Col>
                      </Row>
                    </div>
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
