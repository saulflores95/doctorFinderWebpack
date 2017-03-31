import React from 'react'
import {Row, Col} from 'react-grid-system'

const DoctorExp = (doctor) => (
  <div className='experienceContainer'>
    <Row>
      <Col xs={6} sm={6} md={6} lg={6}>
        <p className='detail-text'>{doctor[0].curriculumOne}</p>
        <p className='detail-text'>{doctor[0].curriculumTwo}</p>
        <p className='detail-text'>{doctor[0].curriculumThree}</p>
      </Col>
      <Col xs={6} sm={6} md={6} lg={6}>
        <p className='detail-text'>{doctor[0].curriculumFour}</p>
        <p className='detail-text'>{doctor[0].curriculumFive}</p>
        <p className='detail-text'>{doctor[0].curriculumSix}</p>
      </Col>
    </Row>
    <style jsx>
      {`
        .experience-container:{
          height:100%;
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
