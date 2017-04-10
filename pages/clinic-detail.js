import React from 'react'
import App from '../components/App/App'
import ClinicDetail from '../components/clinics/cliDetail/ClinicDetail'
export default class extends React.Component {
  static getInitialProps ({ query: { id } }) {
    return { id }
  }

  render () {
    const clinics = require('../clinics.json')
    const clinic = clinics.clinics.filter(clinic => this.props.id === clinic._id)
    return(
      <div>
        <App>
          <div className='container'>
            <ClinicDetail clinic={clinic}/>
          </div>
        </App>
      </div>
    )
  }
}
