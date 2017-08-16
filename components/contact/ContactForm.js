import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Container} from 'react-grid-system'
import RaisedButton from 'material-ui/RaisedButton'

const ContactForm = (email, phone) => (
  <div className='wrapper'>
    <Container className='contactForm'>
      <MuiThemeProvider>
        <div>
          <TextField
            hintText={<span className='label'>Name</span>}
            fullWidth
          /><br />
          <TextField
            hintText={<span className='label'>Email</span>}
            fullWidth
          /><br />
          <TextField
            hintText={<span className='label'>Phone</span>}
            fullWidth
          /><br />
          <TextField
            hintText={<span className='label'>Message</span>}
            fullWidth
            multiLine
            rows={2}
        /><br />
          <div className='button-form'>
            <RaisedButton
              label={<span style={{color: 'white'}}>Send</span>}
              labelPosition='before'
              primary={false}
              backgroundColor='#2d517b'
              style={{marginLeft: 'auto', marginRight: 'auto', display: 'block', width: 300, marginTop: 20, marginBottom: 20}}
          />
          </div>
        </div>
      </MuiThemeProvider>
    </Container>
    <style jsx>
      {`
        .wrapper{
          padding-top: 15px;
          padding-bottom: 140px;
        }

        .label {
          color: #2d517b !important;
          background-image: none !important;
          font-family: 'Montserrat', sans-serif;
        }

        .contactForm {
          padding-top: 15px;
        }

        .button-form {
          margin-left: auto;
          margin-right: auto;
          display: block;
        }

      `}
    </style>
  </div>
)

export default ContactForm
