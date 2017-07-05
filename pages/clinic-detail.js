import React from 'react'
import App from '../components/App/App'
import ClinicDetail from '../components/clinics/cliDetail/ClinicDetail'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(baseUrl + '/api/clinics')
    const json = await res.json()
    return {
      id,
      clinics: json.data
    }
  }

  render () {
    let clinics = this.props.clinics
    const clinic = clinics.filter(cli => this.props.id === cli._id)
    return (
      <div>
        <App>
          <div className='container'>
            <ClinicDetail clinic={clinic} />
          </div>
        </App>
      </div>
    )
  }
}
