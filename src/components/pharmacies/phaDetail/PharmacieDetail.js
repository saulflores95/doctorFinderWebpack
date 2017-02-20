import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import PharmacieHeader from './phaHeader/PharmacieHeader'
import PharmacieMap from '../phaMap/PharmacieMap'
import styles from './PharmacieDetail.css'

const PharmacieDetail = ({pharmacie}) => (
  <div className={styles.pharmacieDetailContainer}>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}><PharmacieHeader pharmacie={pharmacie[0]} /></Col>
          <Col xs={12} sm={12} md={12} lg={12}><PharmacieMap pharmacie={pharmacie[0]} /></Col>
        </Row>
      </Container>
    </MuiThemeProvider>
  </div>
  )

export default PharmacieDetail
