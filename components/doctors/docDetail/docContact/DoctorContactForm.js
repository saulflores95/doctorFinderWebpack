import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FaPhone from 'react-icons/lib/fa/phone'
const addDoctor = (event) => {
  event.preventDefault()
  var firstName = this.refs.firstName.getValue()
  var lastName = this.refs.lastName.getValue()
  var email = this.refs.email.getValue()
  var message = this.refs.message.getValue()

  var contactInformation = {
    firstName: firstName,
    lastName: lastName,
    message: message,
    email: email
  }

  console.log(firstName)
  console.log(lastName)
  console.log(message)
  console.log(email)
  console.log('*************************')
  console.log(contactInformation)
}
const DoctorContactForm = (doctor) => (
  <div>
    <MuiThemeProvider>
      <form className='new-doctor' onSubmit={addDoctor}>
        <TextField
          hintText={<span className='label'>First Name</span>}
          //  ref='firstName'
          fullWidth
        />
        <TextField
          hintText={<span className='label'>Last Name</span>}
          //  ref='lastName'
          fullWidth
        />
        <TextField
          hintText={<span className='label'>Email</span>}
          //  ref='email'
          fullWidth
        />
        <TextField
          hintText={<span className='label'>Message</span>}
          fullWidth
          //  ref='message'
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

export default DoctorContactForm
