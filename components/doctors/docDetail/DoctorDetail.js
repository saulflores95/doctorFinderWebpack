import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import GeneralContactForm from '../../contact/GeneralContactForm'
import {Container, Row, Col} from 'react-grid-system'
import DetailMap from '../../map/DetailMap'
import NoSSR from 'react-no-ssr'
import Transition from 'react-motion-ui-pack'

let idCounter = 0

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
      <div key={idCounter++}>
        <Container className='doc-Container'>
          <div className='doctor-header'>
            <DoctorHeader {...doctor.doctor} />
          </div>
          <div className='doctor-description'>
            <DoctorDescription doctor={doctor.doctor} />
          </div>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div style={{marginTop: 15}}>
                <GeneralContactForm phone={doctor.doctor[0].phone} email={doctor.doctor[0].email} />
              </div>
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
      </div>
    </Transition>
    <style jsx>
      {`
        .doctorDetailWrapper {
          margin-top: 25px;
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
          margin-top: 20px;
        }
      `}
    </style>
  </div>
)

export default DoctorDetail
