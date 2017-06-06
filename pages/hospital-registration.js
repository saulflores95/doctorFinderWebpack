import React from 'react'
import App from '../components/App/App'
import HospitalRegistrationForm from '../components/registration/HospitalRegistrationForm'


const hospitalRegistration = () => (
  <div>
    <App>
      <div className='container'>
        <HospitalRegistrationForm />
      </div>
    </App>
  </div>
)

hospitalRegistration.getInitialProps = async ({ req, res }) => {
  if(!req.user){
    return res.redirect('/login')
  }
  return { user: req.user}
}

export default hospitalRegistration
