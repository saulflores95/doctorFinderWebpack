import React from 'react'
import App from '../components/App/App'
import UserRegistration from '../components/registration/UserRegistration'

const register = () => (
  <div>
    <UserRegistration />
  </div>
)

register.getInitialProps = async({ req, res }) => {
  if(req.user){
    return res.redirect('/')
  }
  let user = 'No User'
  return { user: user}
}

export default register
