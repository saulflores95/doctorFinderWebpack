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
    var name = this.refs.pharmacieName.getValue()
    var img = this.state.url
    var phone = this.refs.phone.getValue()
    var email = this.refs.email.getValue()
    var tag = this.refs.tag.getValue()
    var categories = [
      this.refs.specificOne.getValue(),
      this.refs.specificTwo.getValue(),
      this.refs.specificThree.getValue(),
      this.refs.specificFour.getValue()
    ]
    var description = this.refs.description.getValue()
    var insurance = this.state.toogleState
    var pharmacie = {
      name,
      categories,
      insurance,
      description,
      img,
      phone,
      email,
      position: this.state.position,
      tag
    }

    let _self = this
    if (pharmacie) {
      axios.post('/api/pharmacie-registration', {
        name: pharmacie.name,
        img: pharmacie.img,
        description: pharmacie.description,
        insurance: pharmacie.insurance,
        categories: pharmacie.categories,
        phone: pharmacie.phone,
        email: pharmacie.email,
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
        marginTop: 30
      },
      formMessageDivisor: {
        paddingLeft: 15,
        paddingRight: 15
      },
      customWidth: {
        width: '95%'
      },
      container: {
        paddingBottom: 150
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
                <form>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={12} md={6} lg={6}>
                        <img width='250' height='200' style={styles.img} src={this.state.url} />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <Uploader handle={this.handleImageChange.bind(this)} />
                      </Col>
                      <Col sm={6} style={{marginTop: 25}}>
                        <TextField
                          hintText='Pharmacie Name'
                          ref='pharmacieName'
                          fullWidth
                        />
                      </Col>
                    </Row>
                  </div>
                  <div style={styles.formDivisor}>
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
                    <Row style={{marginTop: 15}}>
                      <Col sm={6} md={6} lg={6}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='tag'
                          ref='tag'
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
                          hintText='E-mail'
                          ref='email'
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6} style={{marginTop: 20}}>
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
