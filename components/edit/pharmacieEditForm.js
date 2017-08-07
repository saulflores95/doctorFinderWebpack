import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { Container, Row, Col } from 'react-grid-system'
import Paper from 'material-ui/Paper'
import Uploader from '../uploader/Uploader'
import axios from 'axios'
import NoSSR from 'react-no-ssr'
import RegistrationMap from '../registration/RegistrationMap'
import AlertContainer from 'react-alert'

export default class PharmacieEditForm extends React.Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
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
    console.log(this.props.pharmacie)
    this.handleChangeProps(this.props.pharmacie)
  }

  handleChangeProps (props) {
    this.setState({
      position: props.position[0],
      value: props.specialty,
      url: props.img
    })
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

  editPharmacie () {
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
    if (pharmacie) {
      axios.put(`/api/pharmacie-edit/${this.props.pharmacie._id}`, {
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
      <div>
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
                        <div style={{marginTop: 30}}>
                          <Row>
                            <Col sm={12} md={12} lg={12}>
                              <Uploader handle={this.handleImageChange.bind(this)} />
                            </Col>
                            <Col sm={12} md={12} lg={12} style={{marginTop: 20}}>
                              <TextField
                                hintText='Pharmacie Name'
                                ref='pharmacieName'
                                fullWidth
                                defaultValue={this.props.pharmacie.name}
                              />
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div style={{marginTop: 20}}>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality'
                          ref='specificOne'
                          fullWidth
                          defaultValue={this.props.pharmacie.categories[0]}
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 2'
                          ref='specificTwo'
                          fullWidth
                          defaultValue={this.props.pharmacie.categories[1]}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 3'
                          ref='specificThree'
                          fullWidth
                          defaultValue={this.props.pharmacie.categories[2]}
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 4'
                          ref='specificFour'
                          fullWidth
                          defaultValue={this.props.pharmacie.categories[3]}
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
                          defaultValue={this.props.pharmacie.description}
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
                          hintText='tag'
                          ref='tag'
                          defaultValue={this.props.pharmacie.tag}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Phone Number'
                          ref='phone'
                          defaultValue={this.props.pharmacie.phone}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='E-mail'
                          ref='email'
                          defaultValue={this.props.pharmacie.email}
                          fullWidth={false}
                        />
                      </Col>
                      <Col sm={6} md={6} lg={6} style={{marginTop: 20}}>
                        <RaisedButton
                          label='Register'
                          onClick={this.editPharmacie.bind(this)}
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
