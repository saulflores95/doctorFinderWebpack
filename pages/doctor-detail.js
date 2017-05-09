import React from 'react'
import App from '../components/App/App'
import DoctorDetail from '../components/doctors/docDetail/DoctorDetail'
import fetch from 'isomorphic-unfetch'

export default class extends React.Component {
  static async getInitialProps  ({ query: { id } }) {
    const res = await fetch('http://healthcarebaja.com/api/doctors')
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
    return(
      <div>
        <App>
          <div className='container'>
            <DoctorDetail doctor={doctor}/>
          </div>
        </App>
      </div>
    )
  }
}
