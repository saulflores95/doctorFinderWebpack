import React from 'react'
import HospitalHeader from './hosHeader/HospitalHeader'
import DetailMap from '../../map/DetailMap'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Col, Container, Row} from 'react-grid-system'
import NoSSR from 'react-no-ssr'

const HospitalDetail = ({hospital}) => (
  <div className='wrapper'>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}><HospitalHeader hospital={hospital} /></Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <NoSSR onSSR={<div>Map Loading...</div>}>
              <DetailMap props={hospital} />
            </NoSSR>
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
      `}
    </style>
  </div>
)

export default HospitalDetail
