import React from 'react'
import Login from '../components/login/Login'

const check = (user) => {
  if (user === 'No User') {
    return <Login />
  }
}

const login = ({user}) => (
  <div className='body' style={{marginTop: -8, marginLeft: -8, marginRight: -8}}>
    {check(user)}
  </div>
)

login.getInitialProps = async ({ req, res }) => {
  if (req.user) {
    return res.redirect('/')
  }
  let user = 'No User'
  return { user: user }
}

export default login
