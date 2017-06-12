import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import Uploader from '../uploader/Uploader'
import axios from 'axios'
import NoSSR from 'react-no-ssr'
import RegistrationMap from './RegistrationMap'
import AlertContainer from 'react-alert'

export default class PharmacieRegistrationForm extends Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      value: 'Podologia',
      position: [32, 100],
      url: 'http://plainicon.com/download-icons/60447/plainicon.com-60447-f430-512px.png'
    }
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    }
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

  mapClick (event) {
    console.log('user right-clicked on map coordinates: ' + event.latlng.toString())
    this.setState({
      position: event.latlng
    })
    console.log(this.state.position)
  }

  addPharmacie () {
    var name = this.refs.clinicName.getValue()
    var img = this.state.url
    var phone = this.refs.phone.getValue()
    var tag = this.refs.tag.getValue()
    var pharmacie = {
      name: name,
      img: img,
      phone: phone,
      position: this.state.position,
      tag: tag
    }

    console.log(pharmacie)
    let _self = this
    if (pharmacie) {
      axios.post('/api/pharmacie-registration', {
        name: pharmacie.name,
        img: pharmacie.img,
        phone: pharmacie.phone,
        position: pharmacie.position,
        tag: pharmacie.tag
      })
      .then(function (response) {
        console.log(response)
        _self.msg.show('Pharmacie Added', {
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
        paddingTop: 35,
        paddingBottom: 90
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
                          hintText='Pharmacie Name'
                          ref='clinicName'
                          fullWidth
                        />
                      </Col>
                    </Row>
                  </div>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={6} md={6} lg={6}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                      <Col sm={12} md={12} lg={12}>
                        <TextField
                          hintText='tag'
                          ref='tag'
                          fullWidth
                        />
                      </Col>
                    </Row>
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
                          onClick={this.addPharmacie.bind(this)}
                          className='button-submit'
                          primary
                        />
                      </Col>
                    </Row>
                  </div>
                </form>
              </Container>
              <div>
                <AlertContainer ref={(a) => { this.msg = a }} {...this.alertOptions} />
              </div>
            </Paper>
          </Container>
        </MuiThemeProvider>
      </div>
    )
  }
}
