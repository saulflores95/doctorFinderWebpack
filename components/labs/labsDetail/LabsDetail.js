import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import GeneralContactForm from '../../contact/GeneralContactForm'
import LabsHeader from './labsHeader/LabsHeader'
import DetailMap from '../../map/DetailMap'
import NoSSR from 'react-no-ssr'
import LabDescription from './labsDescription/LabDescription'

const LabsDetail = ({lab}) => (
  <div className='labDetailContainer'>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <LabsHeader lab={lab[0]} />
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
            <LabDescription description={lab[0].description} />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div style={{marginTop: 15}}>
              <GeneralContactForm />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}>
            <div className='detail-map'>
              <NoSSR onSSR={<div>loading</div>}>
                <DetailMap props={lab[0]} />
              </NoSSR>
            </div>
          </Col>
        </Row>
      </Container>
    </MuiThemeProvider>
    <style jsx>{`
      .labDetailContainer {
        margin-top: 25px;
        padding-bottom: 30px;
      }

      .detail-map {
        padding-top: 20px;
      }
    `}
    </style>
  </div>
)

export default LabsDetail
