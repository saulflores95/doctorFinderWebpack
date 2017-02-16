import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import PharmacieHeader from './phaHeader/PharmacieHeader'
import PharmacieMap from '../phaMap/PharmacieMap'

const PharmacieDetail = (pharmacie) => (
  <MuiThemeProvider>
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={6}><PharmacieHeader pharmacie={pharmacie.pharmacie} /></Col>
        <Col xs={12} sm={12} md={12} lg={6}><PharmacieMap pharmacie={pharmacie.pharmacie} /></Col>
      </Row>
    </Container>
  </MuiThemeProvider>
)

export default PharmacieDetail
