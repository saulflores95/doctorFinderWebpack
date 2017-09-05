import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import AlertContainer from 'react-alert'
import NoSSR from 'react-no-ssr'
import axios from 'axios'
import Uploader from '../uploader/Uploader'
import RegistrationMap from '../registration/RegistrationMap'
import Checkbox from 'material-ui/Checkbox'

export default class HospitalEditForm extends React.Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
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
    this.handleChangeProps(this.props.hospital)
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

  editHospital (event) {
    event.preventDefault()
    var name = this.refs.hospitalName.getValue()
    var img = this.state.url
    var phone = this.refs.phone.getValue()
    var email = this.refs.email.getValue()
    var description = this.refs.description.getValue()
    var facebook = this.refs.facebook.getValue()
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
      categories: categories,
      facebook: facebook
    }
    if (hospital) {
      axios.put(`/api/hospital-edit/${this.props.hospital._id}`, {
        name: hospital.name,
        img: hospital.img,
        phone: hospital.phone,
        email: hospital.email,
        position: hospital.position,
        insurance: hospital.insurance,
        description: hospital.description,
        categories: hospital.categories,
        facebook: hospital.facebook
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
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
    const hospital = this.props.hospital
    return (
      <div>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form className='new-doctor' onSubmit={this.editHospital.bind(this)}>
                  <div>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <img width='200px' height='200px' style={styles.img} src={this.state.url} />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <div style={{marginTop: 30}}>
                          <Row>
                            <Col sm={12} md={12} lg={12}>
                              <Uploader handle={this.handleImageChange.bind(this)} />
                            </Col>
                            <Col sm={12} md={12} lg={12} style={{marginTop: 20}}>
                              <TextField
                                hintText='Hospital Name'
                                ref='hospitalName'
                                fullWidth
                                defaultValue={hospital.name}
                              />
                            </Col>
                            <Col sm={12} md={6} lg={6} style={{marginTop: 20}}>
                              <Checkbox
                                label='USA insurance?'
                                onClick={this.toggleChecked.bind(this)}
                              />
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                    <Row style={{marginTop: 20}}>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality'
                          ref='specificOne'
                          defaultValue={hospital.categories[0]}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 2'
                          ref='specificTwo'
                          defaultValue={hospital.categories[1]}
                          fullWidth
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 3'
                          ref='specificThree'
                          defaultValue={hospital.categories[2]}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 4'
                          defaultValue={hospital.categories[3]}
                          ref='specificFour'
                          fullWidth
                        />
                      </Col>
                      <div style={styles.formMessageDivisor}>
                        <TextField
                          hintText='Describe yourself or experience(do not be shy)'
                          ref='description'
                          fullWidth
                          defaultValue={hospital.description}
                          multiLine
                          rows={3}
                          rowsMax={6}
                        />
                      </div>
                    </Row>
                    <Row style={{marginTop: 15}}>
                      <Col sm={6} md={6} lg={6} style={{marginBottom: 30}}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Phone Number'
                          ref='phone'
                          defaultValue={hospital.phone}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='E-mail'
                          ref='email'
                          defaultValue={hospital.email}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Facebook'
                          ref='facebook'
                          defaultValue={hospital.facebook}
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
