import React from 'react'
import App from '../components/App/App'
import LabRegistrationForm from '../components/registration/LabRegistrationForm'


const labRegistration = () => (
  <div>
    <App>
      <div className='container'>
        <LabRegistrationForm />
      </div>
    </App>
  </div>
)

labRegistration.getInitialProps = async ({ req, res }) => {
  if(!req.user){
    return res.redirect('/login')
  }
  return { user: req.user}
}

export default labRegistration
