import React from 'react'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'
import ClinicEditForm from '../components/edit/clinicEditForm'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const res = await fetch(baseUrl + '/api/clinics')
    const json = await res.json()
    if (!req.user) {
      return res.redirect('/login')
    }
    return {
      id,
      clinics: json.data
    }
  }
  render () {
    let clinics = []
    clinics.clinics = this.props.clinics
    let clinic = clinics.clinics.filter(cli => this.props.id === cli._id)
    clinic = clinic[0]
    return (
      <div>
        <App>
          <div className='container' style={{paddingBottom: 135}}>
            <ClinicEditForm clinic={clinic} />
          </div>
        </App>
      </div>
    )
  }
}
