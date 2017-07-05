import React from 'react'
import Login from '../components/login/Login'

const check = (user) => {
  if (user === 'No User') {
    return <Login />
  }
}

const login = ({user}) => (
  <div>
    {check(user)}
  </div>
)

login.getInitialProps = async ({ req, res }) => {
  if(!req.user) {
    let user = 'No User'
    return { user: user }
  }
  if (req.user) {
    return res.redirect('/')
  }
}

export default login
