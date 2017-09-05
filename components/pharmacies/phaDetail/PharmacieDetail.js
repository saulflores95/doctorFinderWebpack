import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import GeneralContactForm from '../../contact/GeneralContactForm'
import PharmacieHeader from './phaHeader/PharmacieHeader'
import PharmacieDescription from './phaDescription/PharmacieDescription'
import DetailMap from '../../map/DetailMap'
import NoSSR from 'react-no-ssr'

const PharmacieDetail = ({pharmacie}) => {
  return (
    <div className='pharmacieDetailContainer'>
      <MuiThemeProvider>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12}>
              <PharmacieHeader pharmacie={pharmacie[0]} />
            </Col>
            <Col xs={12} sm={12} md={12} lg={12}>
              <PharmacieDescription description={pharmacie[0].description} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div style={{marginTop: 15}}>
                <GeneralContactForm phone={pharmacie[0].phone} email={pharmacie[0].email} toName={pharmacie[0].name} facebook={pharmacie[0].facebook} />
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <div className='detail-map'>
                <NoSSR onSSR={<div>loading</div>}>
                  <DetailMap props={pharmacie[0]} />
                </NoSSR>
              </div>
            </Col>
          </Row>
        </Container>
      </MuiThemeProvider>
      <style jsx>
        {`
          .pharmacieDetailContainer {
            margin-top: 20px;
            padding-bottom: 135px;
          }

          .detail-map {
            padding-top: 20px;
          }
        `}
      </style>
    </div>
  )
}
export default PharmacieDetail
