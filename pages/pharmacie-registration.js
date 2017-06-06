import React from 'react'
import App from '../components/App/App'
import PharmacieRegistrationForm from '../components/registration/PharmacieRegistrationForm'

const pharmacieRegistration = () => (
  <div>
    <App>
      <div className='container'>
        <PharmacieRegistrationForm />
      </div>
    </App>
  </div>
)

pharmacieRegistration.getInitialProps = async ({ req, res }) => {
  if(!req.user){
    return res.redirect('/login')
  }
  return { user: req.user}
}

export default pharmacieRegistration
