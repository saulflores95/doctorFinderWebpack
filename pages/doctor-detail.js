import React from 'react'
import App from '../components/App/App'
import DoctorDetail from '../components/doctors/docDetail/DoctorDetail'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'

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
          <Head>
            <title>{doctor[0].name} - HCB</title>
            <meta property='og:type' content='article' />
            <meta property='og:title' content={doctor[0].name} />
            <meta property='og:description' content={doctor[0].description} />
            <meta property='og:image' content={doctor[0].img}/>
            <meta property="og:image:width" content="640" />
            <meta property="og:image:height" content="442" />
          </Head>
          <div className='container'>
            <DoctorDetail doctor={doctor} />
          </div>
        </App>
      </div>
    )
  }
}
