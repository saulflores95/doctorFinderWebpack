import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Container, Row, Col} from 'react-grid-system'
import LabsHeader from './labsHeader/LabsHeader'
import LabsMap from '../labsMap/LabsMap'
import styles from './LabsDetail.css'

const LabsDetail = ({lab}) => (
  <div className={styles.labDetailContainer}>
    <MuiThemeProvider>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}><LabsHeader lab={lab[0]} /></Col>
          <Col xs={12} sm={12} md={12} lg={12}><LabsMap lab={lab[0]} /></Col>
        </Row>
      </Container>
    </MuiThemeProvider>
  </div>
)

export default LabsDetail
