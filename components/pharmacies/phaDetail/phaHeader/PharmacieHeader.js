import React from 'react'
import {Row, Col} from 'react-grid-system'

const PharmacieHeader = ({pharmacie}) => (
  <div>
    <Row>
      <Col sm={6} md={6} lg={8}>
        <img src={pharmacie.img} height={200} width={250} />
      </Col>
      <Col sm={6} md={6} lg={4}>
        <h1>{pharmacie.name}</h1>
      </Col>
    </Row>
  </div>
)

export default PharmacieHeader
