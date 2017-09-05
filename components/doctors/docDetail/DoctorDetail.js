import React from 'react'
import DoctorHeader from './docHeader/DoctorHeader'
import DoctorDescription from './docDescription/DoctorDescription'
import GeneralContactForm from '../../contact/GeneralContactForm'
import {Container, Row, Col, Visible} from 'react-grid-system'
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
      <div key={idCounter++} style={{paddingBottom: 100}}>
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
                <GeneralContactForm phone={doctor.doctor[0].phone} email={doctor.doctor[0].email} toName={doctor.doctor[0].name} facebook={doctor.doctor[0].facebook}/>
              </div>
              <Visible md lg xl>
                <p>{doctor.doctor[0].phone}</p>
                <p>{doctor.doctor[0].email}</p>
              </Visible>
            </Col>
            <Visible md lg xl>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className='doctor-map'>
                  <NoSSR onSSR={<div>Map Loading...</div>} >
                    <DetailMap props={doctor.doctor[0]} />
                  </NoSSR>
                </div>
                <p style={{marginBottom: 90}}>{doctor.doctor[0].address}</p>
              </Col>
            </Visible>
            <Visible xs sm>
              <Col xs={12} sm={12} md={6} lg={6}>
                <div className='doctor-map2'>
                  <NoSSR onSSR={<div>Map Loading...</div>} >
                    <DetailMap props={doctor.doctor[0]} />
                  </NoSSR>
                </div>
              </Col>
            </Visible>
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
          margin-top: 20px;
        }
        p {
          color: #2d517b;
          font-size: 16px;
          font-family: 'Montserrat', sans-serif;
        }
        .doctor-map2 {
          margin-top: 20px;
          margin-bottom: 100px;
        }
      `}
    </style>
  </div>
)

export default DoctorDetail
