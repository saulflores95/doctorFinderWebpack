import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from 'material-ui/Checkbox'
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Uploader from '../uploader/Uploader'
import NoSSR from 'react-no-ssr'
import RegistrationMap from '../registration/RegistrationMap'
import AlertContainer from 'react-alert'
import injectTapEventPlugin from 'react-tap-event-plugin'
import axios from 'axios'

export default class DoctorEditForm extends React.Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      value: 'Podiatrist',
      count: 0,
      position: [32, 100],
      url: ''
    }
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    }
  }

  componentDidMount () {
    this.handleChangeProps(this.props.doctor)
  }

  componentWillMount () {
    try { injectTapEventPlugin() } catch (e) { }
  }

  editDoctor (event) {
    event.preventDefault()
    var name = this.refs.doctorName.getValue()
    var img = this.state.url
    var address = this.refs.address.getValue()
    var description = this.refs.description.getValue()
    var phone = this.refs.phone.getValue()
    var position = this.state.position
    var insurance = this.state.toogleState
    var specialty = this.state.value
    var facebook = this.refs.facebook.getValue()
    var curriculum = {
      one: this.refs.curriculumOne.getValue(),
      two: this.refs.curriculumTwo.getValue(),
      three: this.refs.curriculumThree.getValue(),
      four: this.refs.curriculumFour.getValue(),
      five: this.refs.curriculumFive.getValue(),
      six: this.refs.curriculumSix.getValue()
    }
    var email = this.refs.email.getValue()
    var doctor = {
      name: name,
      position: position,
      img: img,
      address: address,
      phone: phone,
      description: description,
      insurance: insurance,
      curriculum: curriculum,
      email: email,
      specialty: specialty,
      facebook: facebook
    }

    if (doctor) {
      axios.put(`/api/doctor-edit/${this.props.doctor._id}`, {
        name: doctor.name,
        img: doctor.img,
        description: doctor.description,
        insurance: doctor.insurance,
        curriculum: doctor.curriculum,
        email: doctor.email,
        phone: doctor.phone,
        specialty: doctor.specialty,
        address: doctor.address,
        position: doctor.position,
        facebook: doctor.facebook
      }).then(function (response) {
        console.log(response)
      }).catch(function (err) {
        console.log(err)
      })
    }
  }

  toggleChecked (Checkbox) {
    console.log('toogle was pressed')
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
    console.log('Position: ', this.state.position)
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

  handleChangeProps (props) {
    console.log('clicked')
    this.setState({
      position: props.position[0],
      value: props.specialty,
      url: props.img
    })
  }

  render () {
    const styles = {
      paper: {
        width: '100%',
        paddingBottom: 35,
        marginTop: 30
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
    const doctor = this.props.doctor
    return (
      <div style={styles.container}>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form className='new-doctor'>
                  <div>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <img style={styles.img} src={this.state.url} />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <div style={{marginTop: 30}}>
                          <Row>
                            <Col sm={12} md={4} lg={4} style={{marginRight: 40, paddingTop: 4}}>
                              <Uploader handle={this.handleImageChange.bind(this)} />
                            </Col>
                            <Col sm={12} md={6} lg={6}>
                              <SelectField
                                floatingLabelText='Specialty'
                                value={this.state.value}
                                defaultValue={doctor.specialty}
                                onChange={this.handleChange.bind(this)}
                              >
                                <MenuItem value={'Audiologist'} primaryText='Audiologist' />
                                <MenuItem value={'Allergist'} primaryText='Allergist' />
                                <MenuItem value={'Anesthesiologist'} primaryText='Anesthesiologist' />
                                <MenuItem value={'Angiologist'} primaryText='Angiologist' />
                                <MenuItem value={'Bariatric Surgeon'} primaryText='Bariatric Surgeon' />
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
                            <Col sm={12} md={12} lg={12} style={{marginTop: 20}}>
                              <TextField
                                hintText='Agrega una doctor'
                                ref='doctorName'
                                defaultValue={doctor.name}
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
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 1'
                          ref='curriculumOne'
                          defaultValue={doctor.curriculum[0].one}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 2'
                          ref='curriculumTwo'
                          defaultValue={doctor.curriculum[0].two}
                          fullWidth
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 3'
                          ref='curriculumThree'
                          defaultValue={doctor.curriculum[0].three}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 4'
                          defaultValue={doctor.curriculum[0].four}
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
                          defaultValue={doctor.curriculum[0].five}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Work experience 6'
                          ref='curriculumSix'
                          defaultValue={doctor.curriculum[0].six}
                          fullWidth
                        />
                      </Col>
                    </Row>
                    <div style={styles.formMessageDivisor}>
                      <TextField
                        hintText='Describe yourself or experience(do not be shy)'
                        ref='description'
                        defaultValue={doctor.description}
                        fullWidth
                        multiLine
                        rows={3}
                        rowsMax={6}
                      />
                    </div>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Direccion'
                          ref='address'
                          style={{width: '75%'}}
                          defaultValue={doctor.address}
                          multiLine
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='E-mail'
                          ref='email'
                          defaultValue={doctor.email}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Phone Number'
                          ref='phone'
                          defaultValue={doctor.phone}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Facebook'
                          ref='facebook'
                          defaultValue={doctor.facebook}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={12} md={6} lg={6} style={{marginTop: 20}}>
                        <RaisedButton
                          label='Register'
                          onClick={this.editDoctor.bind(this)}
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
