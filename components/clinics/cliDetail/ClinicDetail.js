import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import ClinicHeader from './cliHeader/ClinicHeader'
import ClinicDescription from './cliDescription/ClinicDescription'
import GeneralContactForm from '../../contact/GeneralContactForm'
import DetailMap from '../../map/DetailMap'
import NoSSR from 'react-no-ssr'

const ClinicDetail = ({clinic}) => (
  <div className='wrapper'>
    {console.log(clinic)}
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <ClinicHeader clinic={clinic[0]} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <ClinicDescription clinic={clinic.clinic} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={{marginTop: 15}}>
              <GeneralContactForm />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className='detail-map'>
              <NoSSR onSSR={<div>Map Loading...</div>}>
                <DetailMap props={clinic[0]} />
              </NoSSR>
            </div>
          </Col>
        </Row>
      </Container>
    </MuiThemeProvider>
    <style jsx>
      {`
        .wrapper {
          padding-top: 15px;
          padding-bottom: 30px;
        }

        .detail-map {
          padding-top: 20px;
        }
      `}
    </style>
  </div>
)

export default ClinicDetail
