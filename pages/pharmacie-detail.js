import React from 'react'
import App from '../components/App/App'
import PharmacieDetail from '../components/pharmacies/phaDetail/PharmacieDetail'
export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const pharmacies = require('../pharmacies.json')
    const pharmacie = pharmacies.pharmacies.filter(pharmacie => this.props.id === pharmacie._id)
    return(
      <div>
        <App>
          <div className='container'>
            <PharmacieDetail pharmacie={pharmacie}/>
          </div>
        </App>
      </div>
    )
  }
}
