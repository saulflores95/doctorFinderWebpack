import React from 'react'
import HospitalList from './hosList/HospitalList'
import {Container, Row} from 'react-grid-system'
import styles from './HospitalWrapper.css'

const HospitalWrapper = ({hospitals}) => (
  <div className={styles.wrapper}>
    <Container>
      <Row>
        {hospitals.length
        ? hospitals.map(hospital => <HospitalList key={hospital._id} hospital={hospital} />) : <p>Awaiting HospitalL</p>
        }
      </Row>
    </Container>
  </div>
)

export default HospitalWrapper
