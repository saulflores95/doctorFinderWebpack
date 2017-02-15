import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DatePicker from 'material-ui/DatePicker'

const DoctorAppointment = () => (
  <div>
    <MuiThemeProvider>
      <DatePicker hintText={<span className='label-text'>Set appointment </span>} />
    </MuiThemeProvider>
  </div>
)

export default DoctorAppointment
