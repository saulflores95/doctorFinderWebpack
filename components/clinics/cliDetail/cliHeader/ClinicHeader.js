import React from 'react'
import {Row, Col} from 'react-grid-system'

const ClinicHeader = ({clinic}) => (
  <div>
    <Row>
      <Col sm={6} md={6} lg={3}>
        <img width='250' height='200' src={clinic.img} />
      </Col>
      <Col sm={6} md={6} lg={3} >
        <h1 className='detail-name'>{clinic.name}</h1>
      </Col>
    </Row>
  </div>
)

export default ClinicHeader
