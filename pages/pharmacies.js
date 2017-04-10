import React from 'react'
import App from '../components/App/App'
import PharmacieWrapper from '../components/pharmacies/phaWrapper/PharmacieWrapper'

export default class extends React.Component {

  render () {
    const pharmacies = require('../pharmacies.json')
    return(
      <div>
        <App>
          <div className='container'>
            <PharmacieWrapper pharmacies={pharmacies.pharmacies}/>
          </div>
        </App>
      </div>
    )
  }
}
