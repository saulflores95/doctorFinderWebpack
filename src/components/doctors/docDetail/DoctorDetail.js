import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import DoctorContactForm from './docContact/DoctorContactForm'
import DoctorMap from './docMap/DoctorMap'
import {Container, Row, Col} from 'react-grid-system'
import styles from './DoctorDetail.css'
import NewUpperNavigation from '../../MainLayout/UpperNavigation/newUpperNavigation/NewUpperNavigation'
import Transition from 'react-motion-ui-pack'

const DoctorDetail = (doctor) => (
  <div className={styles.doctorDetailWrapper}>
    <NewUpperNavigation />
    <Container>
      <Transition
        component={false}
        enter={{
          opacity: 1,
          scale: 1
        }}
        leave={{
          opacity: 0,
          scale: 0
        }}
        >
        <div>
          <DoctorHeader {...doctor.doctor} />
          <DoctorDescription doctor={doctor.doctor} />
        </div>
      </Transition>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <DoctorContactForm {...doctor.doctor} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <DoctorMap {...doctor.doctor} />
        </Col>
      </Row>
    </Container>
  </div>
)

export default DoctorDetail
