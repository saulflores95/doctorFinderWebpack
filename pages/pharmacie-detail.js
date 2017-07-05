import React from 'react'
import App from '../components/App/App'
import PharmacieDetail from '../components/pharmacies/phaDetail/PharmacieDetail'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(baseUrl + '/api/pharmacies')
    const json = await res.json()
    return {
      id,
      pharmacies: json.data
    }
  }

  render () {
    let pharmacies = []
    pharmacies.pharmacies = this.props.pharmacies
    const pharmacie = pharmacies.pharmacies.filter(pharmacie => this.props.id === pharmacie._id)
    return (
      <div>
        <App>
          <div className='container'>
            <PharmacieDetail pharmacie={pharmacie} />
          </div>
        </App>
      </div>
    )
  }
}
