import React from 'react'
import App from '../components/App/App'
import PharmacieRegistrationForm from '../components/registration/PharmacieRegistrationForm'

export default class extends React.Component {
  render () {
    return(
      <div>
        <App>
          <div className='container'>
            <PharmacieRegistrationForm />
          </div>
        </App>
      </div>
    )
  }
}
