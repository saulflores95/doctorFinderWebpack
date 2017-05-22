import React from 'react'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'
import DoctorEditForm from '../components/edit/doctorEditForm'

export default class extends React.Component {
  static async getInitialProps  ({ query: { id } }) {
    const res = await fetch('http://localhost:3000/api/doctors')
    const json = await res.json()
    return {
      id,
      docs: json.data
     }
  }
  render () {
    let doctors = []
    doctors.doctors = this.props.docs
    let doctor = doctors.doctors.filter(doctor => this.props.id === doctor._id)
    doctor = doctor[0]
    return(
      <div>
        <App>
          <DoctorEditForm doctor={doctor}></DoctorEditForm>
        </App>
      </div>
    )
  }
}
