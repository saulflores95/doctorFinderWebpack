import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Container} from 'react-grid-system'
import RaisedButton from 'material-ui/RaisedButton'

const ContactForm = (email, phone) => (
  <div className='wrapper'>
    <div className='img-container'>
      <img className='img' src='https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/splashscreen.png' />
    </div>
    <div className='text-container'>
      <h2 className='text'>Contact us</h2>
      <h2 className='text'>It is our pleasure!</h2>
    </div>
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

        .text{
          text-align: center;
          color: #2d517b;
          font-size: 16px;
          margin-left: auto;
          margin-right: auto;
          display: block;
          font-family: 'Montserrat', sans-serif;
        }

        .label {
          color: #2d517b !important;
          background-image: none !important;
          font-family: 'Montserrat', sans-serif;
        }

        .img-container {
          margin-right: auto;
          display: block;
          width: 128px;
          height: 128px;
          margin-left: auto;
        }

        .contactForm {
          padding-top: 15px;
        }

        .img {
          margin-left: auto;
          margin-right: auto;
          display: bock;
        }

        .text-container {
          margin-left: auto;
          margin-right: auto;
          display: block;
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
