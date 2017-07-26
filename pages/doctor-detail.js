import React from 'react'
import App from '../components/App/App'
import DoctorDetail from '../components/doctors/docDetail/DoctorDetail'
import fetch from 'isomorphic-unfetch'
import Ogtags from '../components/MainLayout/OgTags/OgTags.js'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
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
    const doctor = doctors.doctors.filter(doctor => this.props.id === doctor._id)
    return (
      <div>
        <App>
          <Ogtags props={doctor[0]} />
          <div className='container'>
            <DoctorDetail doctor={doctor} />
          </div>
        </App>
      </div>
    )
  }
}
