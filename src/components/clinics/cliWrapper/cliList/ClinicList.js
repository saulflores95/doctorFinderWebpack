import React from 'react'
import {Col} from 'react-grid-system'
import {Link} from 'react-router-dom'
const ClinicList = ({clinic}) => (
  <div>
    <Col xs={12} sm={12} md={12} lg={4}>
      <div className='list-back'>
        <Link to={`/clinics/${clinic._id}`}>
          <img
            className='img-list'
            src={clinic.img}
          />
        </Link>
        <h1 className='list-h1'>
          <Link className='link' to={`/clinics/${clinic._id}`}>
            {clinic.name}
          </Link>
        </h1>
      </div>
    </Col>
  </div>
)

export default ClinicList
