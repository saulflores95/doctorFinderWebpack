import React from 'react'
import App from '../components/App/App'
import PharmacieEditForm from '../components/edit/pharmacieEditForm'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ req, res, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const data = await fetch(baseUrl + '/api/pharmacies')
    const json = await data.json()
    if (!req.user) {
      return res.redirect('/login')
    }
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
          <div className='container' style={{paddingBottom: 135}}>
            <PharmacieEditForm pharmacie={pharmacie[0]} />
          </div>
        </App>
      </div>
    )
  }
}
