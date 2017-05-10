import Layout from '../components/MyLayout'
import HospitalWrapper from  '../components/hospital/hosWrapper/HospitalWrapper'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'

const hospitals = ({hospitals}) => (
  <div>
    <App>
      <div>
        <HospitalWrapper hospitals={hospitals}/>
      </div>
    </App>
  </div>
)

hospitals.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/api/hospitals')
  const json = await res.json()
  return { hospitals: json.data }
}


export default hospitals
