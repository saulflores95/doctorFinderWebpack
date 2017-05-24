import React from 'react'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'
import DoctorEditForm from '../components/edit/doctorEditForm'
import Head from 'next/head'

export default class extends React.Component {
  static async getInitialProps  ({ query: { id } }) {
  const res = await fetch('https://healthcarebaja.com/api/doctors')
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
        <Head>
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
          <style>
            {`.leaflet-container {
              height: 100%;
              width: 100%;
            }`}

          </style>
        </Head>
          <DoctorEditForm doctor={doctor}></DoctorEditForm>
      </div>
    )
  }
}
