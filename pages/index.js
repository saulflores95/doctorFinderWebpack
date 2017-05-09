import Layout from '../components/MyLayout'
import DoctorWrapper from  '../components/doctors/docWrapper/DoctorWrapper'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'

const doctors = ({ docs }) => (
  <div className='container'>
    <App>
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
  const res = await fetch('http://healthcarebaja.com/api/doctors')
  const json = await res.json()
  return { docs: json.data }
}

export default doctors
