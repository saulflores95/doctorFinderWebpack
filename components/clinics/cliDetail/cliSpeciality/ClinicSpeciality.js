import React from 'react'
import {Row, Col} from 'react-grid-system'

const ClinicSpeciality = ({clinic}) => (
  <div>
    <Row>
      <Col xs={6} sm={6} md={6} lg={6}>
        <p className='detail-text'>{clinic.specificOne}</p>
        <p className='detail-text'>{clinic.specificTwo}</p>
        <p className='detail-text'>{clinic.specificThree}</p>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6}>
        <p className='detail-text'>{clinic.specificFour}</p>
        <p className='detail-text'>{clinic.specificFive}</p>
        <p className='detail-text'>{clinic.specificSix}</p>
      </Col>
    </Row>
  </div>
)

export default ClinicSpeciality
