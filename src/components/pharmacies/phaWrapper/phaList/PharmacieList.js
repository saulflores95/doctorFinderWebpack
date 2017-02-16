import React from 'react'
import {Col} from 'react-grid-system'

const PharmacieList = (pharmacie) => (
  <Col xs={12} sm={12} md={12} lg={4}>
    <div className='list-back'>
      <a href={`/pharmacies/${pharmacie._id}`}>
        <img
          className='img-list'
          src='http://www.midis.com/img/zoomsur-les-pharmacies/logo-pharmacie.png'
        />
      </a>
      <h1 className='list-h1'>
        <a className='link' href={`/pharmacies/${pharmacie._id}`}>
          {pharmacie.name}
        </a>
      </h1>
    </div>
  </Col>
)

export default PharmacieList
