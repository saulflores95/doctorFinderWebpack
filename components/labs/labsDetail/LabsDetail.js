import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import LabsHeader from './labsHeader/LabsHeader'
import DetailMap from '../../map/DetailMap'
import NoSSR from 'react-no-ssr'

const LabsDetail = ({lab}) => (
  <div className='labDetailContainer'>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}><LabsHeader lab={lab[0]} /></Col>
          <Col xs={12} sm={12} md={12} lg={12}>
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

export default LabsDetail
