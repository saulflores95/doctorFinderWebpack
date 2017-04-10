import React from 'react'
import App from '../components/App/App'
import DoctorDetail from '../components/doctors/docDetail/DoctorDetail'
export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const doctors = require('../doctors.json')
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
