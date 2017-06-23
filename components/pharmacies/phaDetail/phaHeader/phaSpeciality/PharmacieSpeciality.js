import React from 'react'
import {Row, Col} from 'react-grid-system'

const PharmacieSpeciality = ({pharmacie}) => (
  <div>
    <Row>
      <Col xs={6} sm={6} md={6} lg={6}>
        <p className='detail-text'>Test speciality</p>
        <p className='detail-text'>Test speciality</p>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6}>
        <p className='detail-text'>Test speciality</p>
        <p className='detail-text'>Test speciality</p>
      </Col>
    </Row>
    <style jsx>
      {`
        .detail-text {
          color: #2d517b;
          font-size: 16px;
          font-family: 'Montserrat', sans-serif;
        }
      `}
    </style>
  </div>
)

export default PharmacieSpeciality
