import React from 'react'
import {Row, Col} from 'react-grid-system'

const ClinicHeader = ({clinic}) => (
  <div>
    <Row>
      <Col sm={6} md={6} lg={4}>
        <img width='250' height='200' src={clinic.img} className='img'/>
      </Col>
      <Col sm={6} md={6} lg={6} >
        <p className='detail-text'>{clinic.name}</p>
      </Col>
    </Row>
    <style jsx>
    {`
      .detail-text {
        font-size: 20px;
        color: #2d517b;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
      }

      .img {
          margin-left: auto;
          margin-right: auto;
          display: block;
      }

    `}
    </style>
  </div>
)

export default ClinicHeader
