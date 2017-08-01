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
import Checkbox from 'material-ui/Checkbox'
import injectTapEventPlugin from 'react-tap-event-plugin'

export default class labEditForm extends React.Component {
  constructor () {
    super()
    this.state = {
      toogleState: false,
      value: 'Podologia',
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
    this.handleChangeProps(this.props.lab)
  }

  componentWillMount () {
    try { injectTapEventPlugin() } catch (e) { }
  }

  handleChangeProps (props) {
    console.log('clicked')
    this.setState({
      position: props.position[0],
      value: props.categories,
      url: props.img
    })
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

  editLab (event) {
    event.preventDefault()
    var name = this.refs.labName.getValue()
    var img = this.state.url
    var phone = this.refs.phone.getValue()
    var tag = this.refs.tag.getValue()
    var description = this.refs.description.getValue()
    var categories = [
      this.refs.specificOne.getValue(),
      this.refs.specificTwo.getValue(),
      this.refs.specificThree.getValue(),
      this.refs.specificFour.getValue()
    ]
    var insurance = this.state.toogleState
    var lab = {
      name: name,
      img: img,
      phone: phone,
      position: this.state.position,
      tag: tag,
      insurance: insurance,
      description: description,
      categories: categories
    }
    if (lab) {
      axios.put(`/api/laboratories-edit/${this.props.lab._id}`, {
        name: lab.name,
        img: lab.img,
        phone: lab.phone,
        position: lab.position,
        tag: lab.tag,
        insurance: lab.insurance,
        description: lab.description,
        categories: lab.categories
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
      img: {
        paddingTop: 25,
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
      }
    }
    const lab = this.props.lab

    return (
      <div>
        <MuiThemeProvider>
          <Container>
            <Paper style={styles.paper} zDepth={3}>
              <Container>
                <form className='new-lab'>
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
                          hintText='Laboratory Name'
                          ref='labName'
                          defaultValue={lab.name}
                          fullWidth
                        />
                      </Col>
                      <Col sm={6}>
                        <Checkbox
                          label='USA insurance?'
                          onClick={this.toggleChecked.bind(this)}
                          defaultValue={lab.insurance}
                        />
                      </Col>
                    </Row>
                  </div>
                  <div style={styles.formDivisor}>
                    <Row>
                      <Col sm={12} md={12} lg={12}>
                        <NoSSR onSSR={<div>Map Loading...</div>} >
                          <RegistrationMap position={this.state.position} mapClick={this.mapClick.bind(this)} />
                        </NoSSR>
                      </Col>
                      <Col sm={12} md={12} lg={12}>
                        <TextField
                          hintText='tag'
                          ref='tag'
                          fullWidth
                          defaultValue={lab.tag}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality'
                          ref='specificOne'
                          fullWidth
                          defaultValue={lab.categories[0]}
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 2'
                          ref='specificTwo'
                          fullWidth
                          defaultValue={lab.categories[1]}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 3'
                          ref='specificThree'
                          fullWidth
                          defaultValue={lab.categories[2]}
                        />
                      </Col>
                      <Col sm={6}>
                        <TextField
                          hintText='Specific Speaciality 4'
                          ref='specificFour'
                          fullWidth
                          defaultValue={lab.categories[3]}
                        />
                      </Col>
                      <div style={styles.formMessageDivisor}>
                        <TextField
                          hintText='Describe yourself or experience(do not be shy)'
                          ref='description'
                          fullWidth
                          multiLine
                          defaultValue={lab.description}
                          rows={3}
                          rowsMax={6}
                        />
                      </div>
                    </Row>
                    <Row>
                      <Col sm={6} md={6} lg={6}>
                        <TextField
                          hintText='Phone Number'
                          ref='phone'
                          fullWidth={false}
                          defaultValue={lab.phone}
                        />
                      </Col>
                      <Col sm={2}>
                        <RaisedButton
                          label='Register'
                          onClick={this.editLab.bind(this)}
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
