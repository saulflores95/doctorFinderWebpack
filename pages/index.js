import Layout from '../components/MyLayout'
import DoctorWrapper from  '../components/doctors/docWrapper/DoctorWrapper'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'

const doctors = ({ docs, user }) => (
  <div className='container'>
    <App>
      {console.log('User', user)}
      <div>
        <DoctorWrapper docs={docs}/>
      </div>
    </App>
    <style jsx>
      {`
      .container {
        height: 100%;
      }
      `}
    </style>
  </div>
)

doctors.getInitialProps = async ({ req }) => {
  const res = await fetch('https://healthcarebaja.com/api/doctors')
  const userRes = await fetch('http://localhost:3000/api/user')
  const json = await res.json()
  return { docs: json.data , user: userRes}
}

export default doctors
