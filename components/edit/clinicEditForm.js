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

export default class ClinicEditForm extends React.Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      value: 'Podologia',
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
    this.handleChangeProps(this.props.clinic)
  }

  componentWillMount () {
    try { injectTapEventPlugin() } catch (e) { }
  }

  editClinic (event) {
    event.preventDefault()
    var name = this.refs.clinicName.getValue()
    var img = this.state.url
    var description = this.refs.description.getValue()
    var specialty = this.state.value
    var phone = this.refs.phone.getValue()
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
      specialty: specialty
    }

    if (clinic) {
      axios.put(`/api/clinic-edit/${this.props.clinic._id}`, {
        name: clinic.name,
        img: clinic.img,
        description: clinic.description,
        insurance: clinic.insurance,
        categories: clinic.categories,
        email: clinic.email,
        phone: clinic.phone,
        position: clinic.position,
        specialty: clinic.specialty
        })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
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
    console.log(props)
    this.setState({
      position: props.position[0],
      value: props.specialty,
      url: props.img
    })
    console.log('Data has been loaded...');
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
    const clinic = this.props.clinic

    return (
      <div style={styles.container}>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form className='new-clinic'>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <img width='250' height='200' style={styles.img} src={this.state.url} />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <Uploader handle={this.handleImageChange.bind(this)} />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Clinic Name'
                          ref='clinicName'
                          defaultValue={clinic.name}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <Checkbox
                          label='USA insurance?'
                          onClick={this.toggleChecked.bind(this)}
                        />
                      </Col>
                      <Col sm={6}>
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
                    </Row>
                  </div>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality'
                          ref='specificOne'
                          defaultValue={clinic.categories[0]}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 2'
                          ref='specificTwo'
                          defaultValue={clinic.categories[1]}
                          fullWidth
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 3'
                          ref='specificThree'
                          defaultValue={clinic.categories[2]}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 4'
                          ref='specificFour'
                          defaultValue={clinic.categories[3]}
                          fullWidth
                        />
                      </Col>
                      <div style={styles.formMessageDivisor}>
                        <TextField
                          hintText='Describe yourself or experience(do not be shy)'
                          ref='description'
                          fullWidth
                          defaultValue={clinic.description}
                          multiLine
                          rows={3}
                          rowsMax={6}
                        />
                      </div>
                    </Row>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap center={this.state.position} position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                    </Row>
                  </div>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='E-mail'
                          ref='email'
                          defaultValue={clinic.email}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Phone Number'
                          ref='phone'
                          defaultValue={clinic.phone}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={2}>
                        <RaisedButton
                          label='Register'
                          onClick={this.editClinic.bind(this)}
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
