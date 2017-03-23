import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import LabsHeader from './labsHeader/LabsHeader'
import DetailMap from '../../map/DetailMap'
import styles from './LabsDetail.css'

const LabsDetail = ({lab}) => (
  <div className={styles.labDetailContainer}>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}><LabsHeader lab={lab} /></Col>
          <Col xs={12} sm={12} md={12} lg={12}><DetailMap props={lab.lab} /></Col>
        </Row>
      </Container>
    </MuiThemeProvider>
  </div>
)

export default LabsDetail
