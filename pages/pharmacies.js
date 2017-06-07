import React from 'react'
import App from '../components/App/App'
import PharmacieWrapper from '../components/pharmacies/phaWrapper/PharmacieWrapper'
import fetch from 'isomorphic-unfetch'

const pharmacies = ({ pharmas }) => (
  <div>
    <App>
      <div className='container'>
        <PharmacieWrapper pharmacies={pharmas} />
      </div>
    </App>
  </div>
)

pharmacies.getInitialProps = async ({ req }) => {
  const res = await fetch('https://healthcarebaja.com/api/pharmacies')
  const json = await res.json()
  return { pharmas: json.data }
}

export default pharmacies
