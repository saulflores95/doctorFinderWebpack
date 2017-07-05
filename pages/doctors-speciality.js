import React from 'react'
import App from '../components/App/App'
import DocListWrapper from '../components/doctors/docWrapper/docListWrapper/DocListWrapper'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(baseUrl + '/api/doctors')
    const json = await res.json()
    return {
      id,
      docs: json.data
    }
  }

  render () {
    let doctors = []
    doctors.doctors = this.props.docs
    let doctor = doctors.doctors.filter(doctor => this.props.id === doctor.specialty)
    return (
      <div>
        <App>
          <div className='container'>
            <DocListWrapper doctor={doctor} />
          </div>
        </App>
      </div>
    )
  }
}
