import React from 'react'
import {Row} from 'react-grid-system'
import ClinicList from './cliList/ClinicList'
var clinics = require('../../../clinics.json')

const ClinicWrapper = () => (
  <div className='wrapper'>
    <div className='wrapperList'>
      <Row>
        {clinics.clinics.length
          ? clinics.clinics.map(clinic => <ClinicList key={clinic._id} clinic={clinic} />) : <p>Awaiting clinics</p>
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

export default ClinicWrapper
