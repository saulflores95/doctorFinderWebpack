import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import {Container} from 'react-grid-system'

const ContactForm = () => (
  <div className='wrapper'>
    <div className='imgcontainer'>
      <img src='https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/splashscreen.png' />
    </div>
    <h2 className='text'>Contact us</h2>
    <h2 className='text'>It is our pleasure!</h2>
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
        </div>
      </MuiThemeProvider>
    </Container>
    <style jsx>
      {`
        .wrapper{
          padding-top: 15px;
        }

        .text{
          text-align: center;
          color: white;
          font-size: 16px;
        }

        .label {
          color: white !important;
          background-image: none !important;
        }

        .imgcontainer{
          width: 100px;
          height: 100px;
          margin-left: auto;
        	margin-right: auto;
        	display: block;
        }

        .contactForm {
          padding-top: 15px;
        }

      `}
    </style>
  </div>
)

export default ContactForm
