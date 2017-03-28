import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import DoctorContactForm from './docContact/DoctorContactForm'
import DetailMap from '../../map/DetailMap'
import {Container, Row, Col} from 'react-grid-system'
import { RouteTransition } from 'react-router-transition'
if (process.env.BROWSER) {
  var styles = require('./DoctorDetail.css')
}
const DoctorDetail = (doctor) => (
  <div className={styles.doctorDetailWrapper}>
    <RouteTransition
      pathname={'/doctors'}
      atEnter={{ translateY: 35 }}
      atLeave={{ translateY: -35 }}
      atActive={{ translateY: 0 }}
      mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}
      >
      <Container>
        <DoctorHeader {...doctor.doctor} />
        <DoctorDescription doctor={doctor.doctor} />
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <DoctorContactForm {...doctor.doctor} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <DetailMap props={doctor.doctor} />
          </Col>
        </Row>
      </Container>
    </RouteTransition>
  </div>
)

export default DoctorDetail
