import React from 'react'
import App from '../components/App/App'
import ClinicRegistrationForm from '../components/registration/ClinicRegistrationForm'

export default class extends React.Component {
  render () {
    return(
      <div>
        <App>
          <div className='container'>
            <ClinicRegistrationForm />
          </div>
        </App>
      </div>
    )
  }
}
