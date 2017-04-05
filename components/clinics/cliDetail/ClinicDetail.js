import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import ClinicHeader from './cliHeader/ClinicHeader'
import ClinicSpeciality from './cliSpeciality/ClinicSpeciality'
import DetailMap from '../../map/DetailMap'
import NoSSR from 'react-no-ssr'

const ClinicDetail = ({clinic}) => (
  <div className='wrapper'>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}><ClinicHeader clinic={clinic} /></Col>
          <Col xs={12} sm={12} md={12} lg={6}><ClinicSpeciality clinic={clinic} /></Col>
          <Col xs={12} sm={12} md={12} lg={12}><NoSSR><DetailMap props={clinic[0]} /></NoSSR></Col>
        </Row>
      </Container>
    </MuiThemeProvider>
    <style jsx>{`
      .wrapper {
        padding-top: 15px;
        padding-bottom: 30px;
      }
    `}</style>
  </div>
)

export default ClinicDetail
