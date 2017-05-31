import React from 'react'
import {Row, Col} from 'react-grid-system'

const PharmacieHeader = ({pharmacie}) => (
  <div>
    <Row>
      <Col sm={6} md={6} lg={4}>
        <img src={pharmacie.img} height={200} width={250} className='img'/>
      </Col>
      <Col sm={6} md={6} lg={6}>
        <p className='detail-text'>{pharmacie.name}</p>
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

export default PharmacieHeader
