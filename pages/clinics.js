import Layout from '../components/MyLayout'
import ClinicWrapper from  '../components/clinics/cliWrapper/ClinicWrapper'
import App from '../components/App/App'
import fetch from 'isomorphic-unfetch'

const clinics = ({cli}) => (
  <div>
    <App>
      <div className='container'>
        <ClinicWrapper clinics={cli}/>
      </div>
    </App>
  </div>
)

clinics.getInitialProps = async ({ req }) => {
  const res = await fetch('http://localhost:3000/api/clinics')
  const json = await res.json()
  return { cli: json.data }
}
export default clinics
