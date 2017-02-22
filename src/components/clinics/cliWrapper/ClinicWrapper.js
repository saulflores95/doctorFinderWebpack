import React from 'react'
import {Container, Row} from 'react-grid-system'
import ClinicList from './cliList/ClinicList'
import styles from './ClinicWrapper.css'

const ClinicWrapper = ({clinics}) => (
  <div className={styles.wrapper}>
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
