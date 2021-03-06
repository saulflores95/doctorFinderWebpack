import React from 'react'
import HospitalList from './hosList/HospitalList'
import {Row} from 'react-grid-system'

const HospitalWrapper = ({hospitals}) => (
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
          padding-bottom: 135px;
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
