import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import ClinicHeader from './cliHeader/ClinicHeader'
import DetailMap from '../../map/DetailMap'
import ClinicSpeciality from './cliSpeciality/ClinicSpeciality'
import styles from './ClinicDetail.css'

const ClinicDetail = ({clinic}) => (
  <div className={styles.wrapper}>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}><ClinicHeader clinic={clinic} /></Col>
          <Col xs={12} sm={12} md={12} lg={6}><ClinicSpeciality clinic={clinic} /></Col>
          <Col xs={12} sm={12} md={12} lg={12}><DetailMap props={clinic} /></Col>
        </Row>
      </Container>
    </MuiThemeProvider>
  </div>
)

export default ClinicDetail
