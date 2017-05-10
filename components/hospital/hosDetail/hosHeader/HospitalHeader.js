import React from 'react'
import {Row, Col} from 'react-grid-system'

const HospitalHeader = ({hospital}) => (
  <div>
    {console.log('header ', hospital)}
    <Row>
      <Col sm={6} md={6} lg={8}>
        <img width='250' height='200' src={hospital.img} />
      </Col>
      <Col sm={6} md={6} lg={4}>
        <h1>{hospital.name}</h1>
      </Col>
    </Row>
  </div>
)

export default HospitalHeader
