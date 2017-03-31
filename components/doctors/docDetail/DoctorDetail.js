import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import DoctorContactForm from './docContact/DoctorContactForm'
import {Container, Row, Col} from 'react-grid-system'
import { RouteTransition } from 'react-router-transition'
import DetailMap from '../../map/DetailMap'

const DoctorDetail = (doctor) => (
  <div className='doctorDetailWrapper'>
    <RouteTransition
      pathname={'/doctors'}
      atEnter={{ translateY: 35 }}
      atLeave={{ translateY: -35 }}
      atActive={{ translateY: 0 }}
      mapStyles={styles => ({ transform: `translateY($'translateY}%)` })}
      >
      <Container>
        <DoctorHeader {...doctor.doctor} />
        <DoctorDescription doctor={doctor.doctor} />
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <DoctorContactForm {...doctor.doctor[0]} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <DetailMap props={doctor.doctor[0]} />
          </Col>
        </Row>
      </Container>
    </RouteTransition>
    <style jsx>
      {`
        .doctorDetailWrapper {
          padding-top: 15px;
          position: absolute;
          height: 100%;
          width: 100%;
        }
        .leaflet-container {
          height:50px;
          width:50px;
        }
      `}
    </style>
  </div>
)

export default DoctorDetail
