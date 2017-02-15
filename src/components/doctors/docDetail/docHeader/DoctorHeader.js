import React from 'react'
import styles from './DoctorHeader.css'
import DoctorAppointment from './docAppointment/DoctorAppointment'
import DoctorExp from './docExp/DoctorExp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Row, Col} from 'react-grid-system'
import Divider from 'material-ui/Divider'

const DoctorHeader = (doctor) => (
  <div>
    <MuiThemeProvider>
      <div className={styles.doctorHeaderContainer}>
        <Row>
          <Col sm={6} md={6} lg={2}>
            <img className={styles.img} src={doctor.img} />
          </Col>
          <Col sm={6} md={6} lg={5}>
            <h1 className='detail-name'>{doctor.name}</h1>
            <span className='detail-name'>{doctor.specialty}</span>
            <DoctorAppointment />
          </Col>
          <Col sm={12} md={12} lg={5}>
            <DoctorExp {...doctor} />
          </Col>
          <Col sm={12} md={12} lg={12}>
            <div className={styles.divider}>
              <Divider />
            </div>
          </Col>
        </Row>
      </div>
    </MuiThemeProvider>
  </div>
)

export default DoctorHeader
