import React from 'react'
import {Row, Col} from 'react-grid-system'

const PharmacieHeader = ({pharmacie}) => (
  <div>
    <Row>
      <Col sm={6} md={6} lg={8}>
        <img src={pharmacie.img} />
      </Col>
      <Col sm={6} md={6} lg={4}>
        <h1 className='detail-name'>{pharmacie.name}</h1>
      </Col>
    </Row>
  </div>
)

export default PharmacieHeader
