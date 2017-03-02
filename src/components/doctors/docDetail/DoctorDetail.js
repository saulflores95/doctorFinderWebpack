import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import DoctorContactForm from './docContact/DoctorContactForm'
import DoctorMap from './docMap/DoctorMap'
import {Container, Row, Col} from 'react-grid-system'
import { RouteTransition } from 'react-router-transition'
import styles from './DoctorDetail.css'

const DoctorDetail = (doctor) => (
  <div className={styles.doctorDetailWrapper}>
    <RouteTransition
      pathname={`/doctors`}
      atEnter={{ translateY: 35, opacity: 0 }}
      atLeave={{ translateY: -35, opacity: 0 }}
      atActive={{ translateY: 0, opacity: 1 }}
      mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)`, opacity: styles.opacity })}
      >
      <Container>
        <DoctorHeader {...doctor.doctor} />
        <DoctorDescription doctor={doctor.doctor} />
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <DoctorContactForm {...doctor.doctor} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <DoctorMap {...doctor.doctor} />
          </Col>
        </Row>
      </Container>
    </RouteTransition>
  </div>
)

export default DoctorDetail
