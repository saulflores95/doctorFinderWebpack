import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FaPhone from 'react-icons/lib/fa/phone'
import axios from 'axios'
import {Row, Col} from 'react-grid-system'

export default class GeneralContactForm extends Component {
  constructor () {
    super()
    this.state = {}
  }

  Contact (event) {
    event.preventDefault()
    let firstName = this.refs.firstName.getValue()
    let lastName = this.refs.lastName.getValue()
    let Email = this.refs.email.getValue()
    let Message = this.refs.message.getValue()
    let Name = firstName + ' ' + lastName
    let clientEmail = this.props.email
    console.log('*********MAIL FORMAT***********')
    console.log(Name)
    console.log(Email)
    console.log(Message)
    console.log('to:', clientEmail)
    console.log('*******************************')

    axios.post('/api/email', {
      name: Name,
      email: Email,
      message: Message,
      to: clientEmail,
      toName: this.props.toName
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  facebook_checker () {
    if(this.props.facebook) {
      let facebook = this.props.facebook
      return (
        <Col xs={4} sm={2} md={3} lg={3} xl={2}>
          <a href={facebook} target='_blank'>
            <div>
              <img src='../../static/facebook.png' alt='facebook' height='40' width='40' />
            </div>
          </a>
        </Col>
      )
    }
    else
      return null
  }

  render () {
    console.log('hola')
    return (
      <div>
        <MuiThemeProvider>
          <form className='new-contact' onSubmit={this.Contact.bind(this)}>
            <TextField
              hintText={<span className='label'>First Name</span>}
              ref='firstName'
              fullWidth
            />
            <TextField
              hintText={<span className='label'>Last Name</span>}
              ref='lastName'
              fullWidth
            />
            <TextField
              hintText={<span className='label'>Email</span>}
              ref='email'
              fullWidth
            />
            <TextField
              hintText={<span className='label'>Message</span>}
              fullWidth
              ref='message'
              multiLine
              rows={2}
              rowsMax={4}
            />
            <Row>
              <Col xs={4} sm={2} md={3} lg={3} xl={2}>
                <RaisedButton
                  label={<span className='label-text'>Send</span>}
                  backgroundColor='#2d517b'
                  type='submit'
                />
              </Col>
              <Col xs={4} sm={2} md={3} lg={3} xl={2}>
                <RaisedButton
                  label={<span style={{color: '#2d517b'}}>Call</span>}
                  labelPosition='before'
                  primary={false}
                  icon={<FaPhone className='label-icon' />}
                  onClick={() => window.open(`tel:${this.props.phone}`)}
                />
              </Col>
              {this.facebook_checker()}
            </Row>
          </form>
        </MuiThemeProvider>
        <style jsx>
          {`
            .label {
              color: #2d517b !important;
              font-family: 'Montserrat', sans-serif
            }
            .label-text {
              color: white;
            }
          `}
        </style>
      </div>
    )
  }
}
