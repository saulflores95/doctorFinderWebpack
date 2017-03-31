import React from 'react'
import App from '../components/App/App'
import DoctorRegistrationForm from '../components/registration/DoctorRegistrationForm'

export default class extends React.Component {
  render () {
    return(
      <div>
        <App>
          <div className='container'>
            <DoctorRegistrationForm />
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
