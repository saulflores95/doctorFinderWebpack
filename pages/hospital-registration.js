import React from 'react'
import App from '../components/App/App'
import HospitalRegistrationForm from '../components/registration/HospitalRegistrationForm'

export default class extends React.Component {
  render () {
    return(
      <div>
        <App>
          <div className='container'>
            <HospitalRegistrationForm />
          </div>
        </App>
      </div>
    )
  }
}
