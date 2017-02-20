import React from 'react'
import {Link} from 'react-router-dom'
import {Col} from 'react-grid-system'

const HospitalList = ({hospital}) => (
  <Col xs={12} sm={12} md={12} lg={4}>
    <div className='list-back'>
      <Link to={`/hospitals/${hospital._id}`}>
        <img
          className='img-list'
          src={hospital.img}
        />
      </Link>
      <h1 className='list-h1'>
        <Link className='link' to={`/hospitals/${hospital._id}`}>
          {hospital.name}
        </Link>
      </h1>
    </div>
  </Col>
)

export default HospitalList
