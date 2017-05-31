import React from 'react'
import {Row, Col} from 'react-grid-system'

const HospitalHeader = ({hospital}) => (
  <div>
    <Row>
      <Col sm={6} md={6} lg={4}>
        <img width='250' height='200' className='img' src={hospital.img} />
      </Col>
        <p className='detail-text'>{hospital.name}</p>
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

export default HospitalHeader
