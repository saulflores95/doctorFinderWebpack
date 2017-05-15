import React from 'react'
import {Row, Col} from 'react-grid-system'

const DoctorExp = (doctor) => (
  <div className='experienceContainer'>
    <Row>
      <Col xs={6} sm={6} md={6} lg={6}>
        <p className='detail-text'>{doctor.doctor.curriculum[0].one}</p>
        <p className='detail-text'>{doctor.doctor.curriculum[0].two}</p>
        <p className='detail-text'>{doctor.doctor.curriculum[0].three}</p>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6}>
        <p className='detail-text'>{doctor.doctor.curriculum[0].four}</p>
        <p className='detail-text'>{doctor.doctor.curriculum[0].five}</p>
        <p className='detail-text'>{doctor.doctor.curriculum[0].six}</p>
      </Col>
    </Row>
    <style jsx>
      {`
        .experience-container:{
          height:100%;
        }

        .detail-text {
          color: #2d517b;
          font-size: 16px;
          font-family: 'Montserrat', sans-serif;
        }

        .exp-text:{
          font-size: x-large;
          font-weight: 100;
        }
      `}
    </style>
  </div>
)

export default DoctorExp
