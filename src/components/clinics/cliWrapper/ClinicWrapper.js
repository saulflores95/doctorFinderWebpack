import React from 'react'
import {Container, Row} from 'react-grid-system'
import ClinicList from './cliList/ClinicList'

const ClinicWrapper = ({clinics}) => (
  <div>
    <Container>
      <Row>
        {clinics.length
          ? clinics.map(clinic => <ClinicList key={clinic._id} clinic={clinic} />) : <p>Awaiting clinics</p>
        }
      </Row>
    </Container>
  </div>
)

export default ClinicWrapper
