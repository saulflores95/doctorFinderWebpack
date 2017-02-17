import React from 'react'
import PharmacieListItem from './phaListItem/PharmacieListItem'

const PharmacieListWrapper = ({pharmacies}) => (
  <div>
    {pharmacies.length
    ? pharmacies.map(pharmacie => <PharmacieListItem key={pharmacie._id} {...pharmacie} />) : <p>Awaiting Doctors</p>
    }
  </div>
)

export default PharmacieListWrapper
