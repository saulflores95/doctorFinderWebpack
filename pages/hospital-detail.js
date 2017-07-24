import React from 'react'
import App from '../components/App/App'
import HospitalDetail from '../components/hospital/hosDetail/HospitalDetail'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const res = await fetch(baseUrl + '/api/hospitals')
    const json = await res.json()
    return {
      id,
      hospitals: json.data
    }
  }

  render () {
    let hospitals = []
    hospitals = this.props.hospitals
    const hospital = hospitals.filter(hospital => this.props.id === hospital._id)
    return (
      <div>
        <App>
          <div className='container'>
            <HospitalDetail hospital={hospital} />
          </div>
        </App>
      </div>
    )
  }
}
