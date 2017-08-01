import React from 'react'
import HospitalHeader from './hosHeader/HospitalHeader'
import DetailMap from '../../map/DetailMap'
import HospitalDescription from './hosDescription/HospitalDescription'
import GeneralContactForm from '../../contact/GeneralContactForm'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Col, Container, Row} from 'react-grid-system'
import NoSSR from 'react-no-ssr'

const HospitalDetail = ({hospital}) => (
  <div className='wrapper'>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <HospitalHeader hospital={hospital[0]} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <HospitalDescription description={hospital[0].description} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={{marginTop: 15}}>
              <GeneralContactForm phone={hospital[0].phone} email={hospital[0].email} />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className='detail-map'>
              <NoSSR onSSR={<div>Map Loading...</div>}>
                <DetailMap props={hospital[0]} />
              </NoSSR>
            </div>
          </Col>
        </Row>
      </Container>
    </MuiThemeProvider>
    <style jsx>
      {`
        .wrapper {
          margin-top: 25px;
          padding-bottom: 135px;
        }

        .detail-map {
          padding-top: 20px;
        }
      `}
    </style>
  </div>
)

export default HospitalDetail
