import React from 'react'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'

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
    const doctor = doctors.doctors.filter(doctor => this.props.id === doctor._id)
    console.log(doctor)
    if(doctor){
      console.log(`/api/doctor-edit/${doctor[0]._id}`)
    }
    return(
      <div>
        <h1>doctor id: {doctor[0]._id}</h1>
      </div>
    )
  }
}
