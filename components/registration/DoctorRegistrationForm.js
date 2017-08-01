import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RegistrationMap from './RegistrationMap'
import Uploader from '../uploader/Uploader'
import axios from 'axios'
import NoSSR from 'react-no-ssr'
import AlertContainer from 'react-alert'
import injectTapEventPlugin from 'react-tap-event-plugin'

export default class DoctorRegistrationForm extends Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      value: 'Podologia',
      count: 0,
      position: [32, 100],
      url: 'https://s3-us-west-1.amazonaws.com/healthcarebaja/9.png'
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

  toggleChecked (Checkbox) {
    console.log('this was pressed')
    if (this.state.toogleState === false) {
      this.state.toogleState = true
    } else {
      this.state.toogleState = false
    }
    console.log(this.state.toogleState)
  }

  handleChange (event, index, value) {
    this.setState({value: value})
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

  handleOpen () {
    this.state.open = true
  }

  handleClose () {
    this.state.open = false
  }

  addDoctor () {
    var name = this.refs.doctorName.getValue()
    var img = this.state.url
    var description = this.refs.description.getValue()
    var insurance = this.state.toogleState
    var specialty = this.state.value
    var curriculum = {
      one: this.refs.curriculumOne.getValue(),
      two: this.refs.curriculumTwo.getValue(),
      three: this.refs.curriculumThree.getValue(),
      four: this.refs.curriculumFour.getValue(),
      five: this.refs.curriculumFive.getValue(),
      six: this.refs.curriculumSix.getValue()
    }
    var email = this.refs.email.getValue()
    var phone = this.refs.phone.getValue()
    var address = this.refs.address.getValue()
    var doctor = {
      name: name,
      img: img,
      description: description,
      insurance: insurance,
      curriculum: curriculum,
      email: email,
      specialty: specialty,
      phone: phone,
      address: address,
      position: this.state.position
    }

    console.log('Doctor: ', doctor)
    let _self = this

    if (doctor) {
      axios.post('/api/doctor-registration', {
        name: doctor.name,
        img: doctor.img,
        description: doctor.description,
        insurance: doctor.insurance,
        curriculum: doctor.curriculum,
        email: doctor.email,
        phone: doctor.phone,
        specialty: doctor.specialty,
        address: doctor.address,
        position: doctor.position
      })
      .then(function (response) {
        console.log(response)
        _self.msg.show('Doctor Added', {
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
        paddingBottom: 35,
        marginTop: '50px'
      },
      img: {
        borderRadius: '50%',
        paddingTop: 25,
        paddingBottom: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        width: '250px',
        height: '250px'
      },
      formMessageDivisor: {
        padding: '0 0 10px 0'
      },
      formStyle: {
        color: 'white'
      }
    }

    return (
      <div style={styles.container}>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form className='new-doctor'>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <img style={styles.img} src={this.state.url} />
                      </Col>

                      <Col sm={12} md={6} lg={6}>
                        <Uploader handle={this.handleImageChange.bind(this)} />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <TextField
                          hintText='Agrega una doctor'
                          ref='doctorName'
                          fullWidth
                        />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <SelectField
                          floatingLabelText='Specialty'
                          value={this.state.value}
                          onChange={this.handleChange.bind(this)}
                        >
                          <MenuItem value={'Audiologist'} primaryText='Audiologist' />
                          <MenuItem value={'Allergist'} primaryText='Allergist' />
                          <MenuItem value={'Anesthesiologist'} primaryText='Anesthesiologist' />
                          <MenuItem value={'Cardiologist'} primaryText='Cardiologist' />
                          <MenuItem value={'Dentist'} primaryText='Dentist' />
                          <MenuItem value={'Dermatologist'} primaryText='Dermatologist' />
                          <MenuItem value={'Endocrinologist'} primaryText='Endocrinologist' />
                          <MenuItem value={'Epidemiologist'} primaryText='Epidemiologist' />
                          <MenuItem value={'Family Medicine'} primaryText='Family Medicine' />
                          <MenuItem value={'Gynecologist'} primaryText='Gynecologist' />
                          <MenuItem value={'Gastroenterologist'} primaryText='Gastroenterologist' />
                          <MenuItem value={'General Medicine'} primaryText='General Medicine' />
                          <MenuItem value={'Hematologist'} primaryText='Hematologist' />
                          <MenuItem value={'Infectious Disease Specialist'} primaryText='Infectious Disease Specialist' />
                          <MenuItem value={'Internal Medicine Specialist'} primaryText='Internal Medicine Specialist' />
                          <MenuItem value={'Medical Geneticist'} primaryText='Medical Geneticist' />
                          <MenuItem value={'Microbiologist'} primaryText='Microbiologist' />
                          <MenuItem value={'Neonatologist'} primaryText='Neonatologist' />
                          <MenuItem value={'Neumologist'} primaryText='Neumologist' />
                          <MenuItem value={'Nephrologist'} primaryText='Nephrologist' />
                          <MenuItem value={'Neurologist'} primaryText='Neurologist' />
                          <MenuItem value={'Obstetrician'} primaryText='Obstetrician' />
                          <MenuItem value={'Oncologist'} primaryText='Oncologist' />
                          <MenuItem value={'Ophthalmologists'} primaryText='Ophthalmologists' />
                          <MenuItem value={'Orthopedic Surgeon'} primaryText='Orthopedic Surgeon' />
                          <MenuItem value={'Otorhinolaryngologist'} primaryText='Otorhinolaryngology' />
                          <MenuItem value={'Emergency Medicine'} primaryText='Emergency Medicine' />
                          <MenuItem value={'ENT Specialist'} primaryText='ENT Specialist' />
                          <MenuItem value={'Pediatrician'} primaryText='Pediatrician' />
                          <MenuItem value={'Plastic Surgeon'} primaryText='Plastic Surgeon' />
                          <MenuItem value={'Podiatrist'} primaryText='Podiatrist' />
                          <MenuItem value={'Psychiatrist'} primaryText='Psychiatrist' />
                          <MenuItem value={'Radiologist'} primaryText='Radiologist' />
                          <MenuItem value={'Rheumatologist'} primaryText='Rheumatologist' />
                          <MenuItem value={'Surgeon'} primaryText='Surgeon' />
                          <MenuItem value={'Traumatologist'} primaryText='Traumatologist' />
                          <MenuItem value={'Urologist'} primaryText='Urologist' />
                          <MenuItem value={'Veterinarian'} primaryText='Veterinarian' />
                        </SelectField>
                      </Col>
                    </Row>
                  </div>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 1'
                          ref='curriculumOne'
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 2'
                          ref='curriculumTwo'
                          fullWidth
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 3'
                          ref='curriculumThree'
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 4'
                          ref='curriculumFour'
                          fullWidth
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 5'
                          ref='curriculumFive'
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 6'
                          ref='curriculumSix'
                          fullWidth
                        />
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col sm={12} md={12} lg={12}>
                      <NoSSR onSSR={<div>Map Loading...</div>} >
                        <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                      </NoSSR>
                    </Col>
                    <Col sm={12} md={12} lg={12}>
                      <TextField
                        hintText='Direccion'
                        ref='address'
                        fullWidth
                        multiLine
                      />
                    </Col>
                  </Row>
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
                  <div style={styles.formDivisor}>
                    <Checkbox
                      label='USA insurance?'
                      onClick={this.toggleChecked.bind(this)}
                    />
                    <Row>
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
                      <Col sm={12} md={6} lg={6}>
                        <RaisedButton
                          label='Register'
                          onClick={this.addDoctor.bind(this)}
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
