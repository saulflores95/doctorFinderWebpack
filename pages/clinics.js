import ClinicWrapper from '../components/clinics/cliWrapper/ClinicWrapper'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'

const clinics = ({cli}) => (
  <div>
    <App>
      <div className='container'>
        <ClinicWrapper clinics={cli} />
      </div>
    </App>
  </div>
)

clinics.getInitialProps = async ({ req }) => {
  const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
  const res = await fetch(baseUrl + '/api/clinics')
  const json = await res.json()
  return { cli: json.data }
}

export default clinics
