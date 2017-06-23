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
              <PharmacieDescription pharmacie={pharmacie.pharmacie} />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <GeneralContactForm />
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
}
export default PharmacieDetail
