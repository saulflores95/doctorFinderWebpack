import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import styles from './ContactForm.css'
const ContactForm = () => (
  <div className={styles.wrapper}>
    <div className={styles.imgcontainer}>
      <img src='https://s3-us-west-1.amazonaws.com/healthcarebaja/undefined/CategoryIcons/splashscreen.png' />
    </div>
    <h2 className={styles.text}>Contact us</h2>
    <p className={styles.text}>It is our pleasure!</p>
    <MuiThemeProvider>
      <div>
        <TextField
          hintText={<span className={styles.label}>Name</span>}
          fullWidth
        /><br />
        <TextField
          hintText={<span className={styles.label}>Email</span>}
          fullWidth
        /><br />
        <TextField
          hintText={<span className={styles.label}>Phone</span>}
          fullWidth
        /><br />
        <TextField
          hintText={<span className={styles.label}>Message</span>}
          fullWidth
          multiLine
          rows={2}
      /><br />
      </div>
    </MuiThemeProvider>
  </div>
)

export default ContactForm
