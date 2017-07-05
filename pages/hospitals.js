import HospitalWrapper from '../components/hospital/hosWrapper/HospitalWrapper'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'

const hospitals = ({hospitals}) => (
  <div>
    <App>
      <div>
        <HospitalWrapper hospitals={hospitals} />
      </div>
    </App>
  </div>
)

hospitals.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : '';
  const res = await fetch(baseUrl + 'api/hospitals')
  const json = await res.json()
  return { hospitals: json.data }
}

export default hospitals
