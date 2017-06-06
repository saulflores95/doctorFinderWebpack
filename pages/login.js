import React from 'react'
import App from '../components/App/App'
import Login from '../components/login/Login'

const check = (user) => {
  if(user === 'No User'){
    return <Login />
  }
}

const login = ({user}) => (
    <div>
      {check(user)}
    </div>
)

login.getInitialProps = async ({ req, res }) => {
  if(req.user){
    return res.redirect('/')
  }
  let user = 'No User'
  return { user: user}
}

export default login
