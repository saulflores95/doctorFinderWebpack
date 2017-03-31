import React from 'react'
import HospitalList from './hosList/HospitalList'
import {Row} from 'react-grid-system'
var hospitalss = require('../../../hospitals.json')
var hospitals = hospitalss.hospitals

const HospitalWrapper = () => (
  <div className='wrapper'>
    <div className='wrapperList'>
      <Row>
        {hospitals.length
        ? hospitals.map(hospital => <HospitalList key={hospital._id} hospital={hospital} />) : <p>Awaiting HospitalL</p>
        }
      </Row>
    </div>
    <style jsx>
      {`
        .wrapper {
          padding-top: 15px;
          margin-bottom: 70px;
        }

        .wrapperList {
          margin-left: 25px;
          margin-right: 25px;
        }
      `}
    </style>
  </div>
)

export default HospitalWrapper
