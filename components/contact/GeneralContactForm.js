import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FaPhone from 'react-icons/lib/fa/phone'
import axios from 'axios'

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
      to: clientEmail
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render () {
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
            <RaisedButton
              label={<span className='label-text'>Send</span>}
              backgroundColor='#2d517b'
              type='submit'
            />
            <RaisedButton
              label={<span style={{color: '#2d517b'}}>Call</span>}
              labelPosition='before'
              primary={false}
              icon={<FaPhone className='label-icon' />}
              onClick={() => window.open(`tel:${this.props.phone}`)}
            />
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
