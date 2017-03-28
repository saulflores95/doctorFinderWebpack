import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FaPhone from 'react-icons/lib/fa/phone'
if (process.env.BROWSER) {
  var styles = require('./DoctorContactForm.css')
}
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
          hintText={<span className={styles.label}>First Name</span>}
          //  ref='firstName'
          fullWidth
        />
        <TextField
          hintText={<span className={styles.label}>Last Name</span>}
          //  ref='lastName'
          fullWidth
        />
        <TextField
          hintText={<span className={styles.label}>Email</span>}
          //  ref='email'
          fullWidth
        />
        <TextField
          hintText={<span className={styles.label}>Message</span>}
          fullWidth
          //  ref='message'
          multiLine
          rows={2}
          rowsMax={4}
        />
        <RaisedButton
          label={<span className='label-text'>Send</span>}
          type='submit'
          primary
        />
        <RaisedButton
          label={<span className='label-text'>Call</span>}
          labelPosition='before'
          primary={false}
          icon={<FaPhone className='label-icon' />}
        />
      </form>
    </MuiThemeProvider>

  </div>
)

export default DoctorContactForm
