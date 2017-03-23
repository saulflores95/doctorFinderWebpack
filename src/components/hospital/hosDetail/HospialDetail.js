import React from 'react'
import HospitalHeader from './hosHeader/HospitalHeader'
import DetailMap from '../../map/DetailMap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Col, Container, Row} from 'react-grid-system'
import styles from './HospitalDetail.css'

const HospitalDetail = ({hospital}) => (
  <div className={styles.wrapper}>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}><HospitalHeader hospital={hospital} /></Col>
          <Col xs={12} sm={12} md={12} lg={12}> <DetailMap props={hospital} /></Col>
        </Row>
      </Container>
    </MuiThemeProvider>
  </div>
)

export default HospitalDetail
