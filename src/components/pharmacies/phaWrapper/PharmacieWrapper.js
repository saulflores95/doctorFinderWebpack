import React from 'react'
import PharmacieList from './phaList/PharmacieList'
import {Container, Row} from 'react-grid-system'

const PharmacieWrapper = ({pharmacies}) => (
  <div>
    <Container>
      <Row>
        {pharmacies.length
        ? pharmacies.map(pharmacie => <PharmacieList key={pharmacie._id} {...pharmacie} />) : <p>Awaiting Pharmacies</p>
        }
      </Row>
    </Container>
  </div>
)

export default PharmacieWrapper
