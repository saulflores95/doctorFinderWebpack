import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import DoctorContactForm from './docContact/DoctorContactForm'
import {Container, Row, Col} from 'react-grid-system'
import DetailMap from '../../map/DetailMap'
import NoSSR from 'react-no-ssr'
import Transition from 'react-motion-ui-pack'
import {spring} from 'react-motion'

const DoctorDetail = (doctor) => (
  <div className='doctorDetailWrapper'>
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
      <Container className='doc-Container'>
        <div className='doctor-header'>
          <DoctorHeader {...doctor.doctor}/>
        </div>
        <div className='doctor-description'>
          <DoctorDescription doctor={doctor.doctor} />
        </div>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <DoctorContactForm {...doctor.doctor[0]} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className='doctor-map'>
              <NoSSR onSSR={<div>Map Loading...</div>} >
                <DetailMap props={doctor.doctor[0]} />
              </NoSSR>
            </div>
          </Col>
        </Row>
      </Container>
    </Transition>
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
        .doctorHeader {
          margin-bottom: 20px;
        }
        .doctor-description {
          margin-bottom: 10px;
        }
        .doctor-map {
          margin-bottom: 90px;
        }
      `}
    </style>
  </div>
)

export default DoctorDetail
