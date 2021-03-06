import React from 'react'
import App from '../components/App/App'
import DoctorRegistrationForm from '../components/registration/DoctorRegistrationForm'

const doctorRegistration = () => (
  <div>
    <App>
      <div className='container' style={{paddingBottom: 150}}>
        <DoctorRegistrationForm />
      </div>
    </App>
  </div>
)

doctorRegistration.getInitialProps = async ({ req, res }) => {
  if (!req.user) {
    return res.redirect('/login')
  }
  return { user: req.user }
}

export default doctorRegistration
