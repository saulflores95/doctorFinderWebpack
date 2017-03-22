import React from 'react'
import styles from './DoctorHeader.css'
import DoctorExp from './docExp/DoctorExp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Row, Col} from 'react-grid-system'
import Divider from 'material-ui/Divider'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'

const DoctorHeader = (doctor) => (
  <div>
    <MuiThemeProvider>
      <div className={styles.doctorHeaderContainer}>
        <Row>
          <Col sm={6} md={6} lg={2}>
            <Transition
              component={false}
              enter={{
                opacity: 1,
                translateX: spring(0, {stiffness: 400, damping: 15})
              }}
              leave={{
                opacity: 0,
                translateX: 250
              }}
            >
              <img alt={doctor.name} className={styles.img} src={doctor.img} />
            </Transition>
          </Col>
          <Col sm={6} md={6} lg={5}>
            <h1>{doctor.name}</h1>
            <span className={styles.label}>{doctor.specialty}</span>
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
