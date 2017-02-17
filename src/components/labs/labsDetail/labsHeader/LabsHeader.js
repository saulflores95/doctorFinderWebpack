import React from 'react'
import {Row, Col} from 'react-grid-system'

const LabsHeader = ({lab}) => (
  <div>
    <Row>
      <Col sm={6} md={6} lg={8}>
        <img src={lab.img} />
      </Col>
      <Col sm={6} md={6} lg={4}>
        <h1 className='detail-name'>{lab.name}</h1>
      </Col>
    </Row>
  </div>
)

export default LabsHeader
