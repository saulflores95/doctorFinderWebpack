import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'
import styles from './DoctorAppointment.css'

const DoctorAppointment = () => (
  <div>
    <MuiThemeProvider>
      <DatePicker hintText={<span className={styles.label}>Set appointment </span>} />
    </MuiThemeProvider>
  </div>
)

export default DoctorAppointment
