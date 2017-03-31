import React from 'react'
import App from '../components/App/App'
import DocListWrapper from '../components/doctors/docWrapper/docListWrapper/DocListWrapper'

export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const doctors = require('../doctors.json')
    const doctor = doctors.doctors.filter(doctor => this.props.id === doctor.specialty)
    return(
      <div>
        <App>
          <div className='container'>
            <DocListWrapper doctor={doctor}/>
          </div>
        </App>
        <style jsx>
          {`
            .container {
              padding-top:65px;
            }
          `}
        </style>
      </div>
    )
  }
}
