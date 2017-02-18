import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import ClinicHeader from './cliHeader/ClinicHeader'
import ClinicMap from '../cliMap/ClinicMap'
import ClinicSpeciality from './cliSpeciality/ClinicSpeciality'

const ClinicDetail = ({clinic}) => (
  <MuiThemeProvider>
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}><ClinicHeader clinic={clinic} /></Col>
        <Col xs={12} sm={12} md={12} lg={6}><ClinicSpeciality clinic={clinic} /></Col>
        <Col xs={12} sm={12} md={12} lg={6}><ClinicMap clinic={clinic} /></Col>
      </Row>
    </Container>
  </MuiThemeProvider>
)

export default ClinicDetail
